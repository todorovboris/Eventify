import { Link, useNavigate, useParams } from 'react-router';
import { useOneEvent } from '../../api/eventsApi.js';
import { useTickets, useBuyTicket } from '../../api/ticketsApi.js';
import useAuth from '../../hooks/useAuth.js';

export default function EventsDetails() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const { event } = useOneEvent(eventId);
    const { userId } = useAuth();
    const { buyTicket } = useBuyTicket();
    const { tickets, addTicket } = useTickets(eventId);

    if (!event) {
        return <p>Loading...</p>;
    }

    const buyTicketHandler = async () => {
        const ticketResult = await buyTicket(eventId);
        addTicket({ ...ticketResult, owner: { userId } });

        navigate(`/events/${eventId}/details`);
    };

    let isBuyer = false;
    tickets.forEach((ticket) => {
        if (ticket._ownerId === userId) {
            isBuyer = true;
        }
    });

    const guestTickets = tickets.length;

    const isOwner = event._ownerId === userId;

    const availableTickets = event.capacity - event.marked?.length - guestTickets;

    let isSoldOut = false;

    if (availableTickets <= 0) {
        isSoldOut = true;
    }

    return (
        <div className="event-details-container">
            <div className="event-header">
                <h1>{event.title}</h1>
                <div className="event-details-info">
                    <img src={event.imageUrl} alt={event.title} className="event-details-image" />
                    <p className="event-meta">
                        📍 {event.location} | 📅 {event.date}
                    </p>
                    <p className="event-tickets">
                        Available Tickets: <p className="event-tickets-value">{availableTickets > 0 ? availableTickets : 'SOLD OUT'}</p>
                    </p>
                </div>
            </div>
            <div className="event-details-description">
                <h3>Description</h3>
                <p>{event.description}</p>
            </div>

            {userId && (
                <div className="event-actions">
                    {!isOwner && (
                        <>
                            {/* {isSoldOut && (
                            <button className="event-register-btn" disabled>
                                SOLD OUT
                            </button>
                        )} */}

                            {isBuyer ? (
                                <button className="event-register-btn" disabled>
                                    You have a ticket
                                </button>
                            ) : (
                                <button className="event-register-btn" onClick={buyTicketHandler}>
                                    Buy Ticket
                                </button>
                            )}
                        </>
                    )}
                    {isOwner && (
                        <>
                            <Link to={`/events/${eventId}/edit`} className="event-edit-btn">
                                Edit
                            </Link>
                            <button className="event-delete-btn">Delete</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
