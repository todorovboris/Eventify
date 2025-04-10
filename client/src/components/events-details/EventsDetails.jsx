import { Link, useNavigate, useParams } from 'react-router';
import { useEventDelete, useOneEvent } from '../../api/eventsApi.js';
import { useEventTickets, useBuyTicket } from '../../api/ticketsApi.js';
import useAuth from '../../hooks/useAuth.js';

export default function EventsDetails() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const { event } = useOneEvent(eventId);
    const { userId } = useAuth();
    const { buyTicket } = useBuyTicket();
    const { tickets, addTicket } = useEventTickets(eventId);
    const { deleteEvent } = useEventDelete();

    if (!event) {
        return <p>Loading...</p>;
    }

    const deleteEventHandler = async () => {
        const confirmForDelete = confirm(`Are you sure you want to delete ${event.title} event?`);
        if (!confirmForDelete) return;

        try {
            await deleteEvent(eventId);
            navigate('/profile');
        } catch (err) {
            return alert(err.message);
        }
    };

    const buyTicketHandler = async () => {
        try {
            const ticketResult = await buyTicket(eventId, event.title, event.date, event.imageUrl);
            addTicket({ ...ticketResult, author: { userId } });

            navigate(`/events/${eventId}/details`);
        } catch (err) {
            return err.message;
        }
    };

    let isBuyer = false;
    tickets.forEach((ticket) => {
        if (ticket._ownerId === userId) {
            isBuyer = true;
        }
    });

    const guestTicketsCount = tickets.length;
    const availableTickets = event.capacity - guestTicketsCount;

    let isSoldOut = false;

    if (availableTickets <= 0) {
        isSoldOut = true;
    }

    const isOwner = event._ownerId === userId;

    return (
        <div className="event-details-container">
            <div className="event-header">
                <h1>{event.title}</h1>
                <div className="event-details-info">
                    <img src={event.imageUrl} alt={event.title} className="event-details-image" />
                    <div className="event-meta">
                        📍 {event.location} | 📅 {event.date}
                    </div>
                    <div className="event-tickets">
                        Category: <p className="event-tickets-value">{event.category}</p>
                    </div>
                    <div className="event-tickets">
                        Available Tickets: <p className="event-tickets-value">{availableTickets > 0 ? availableTickets : 'SOLD OUT'}</p>
                    </div>
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
                            {isBuyer ? (
                                <button className="event-register-btn" disabled>
                                    Ticket Purchased
                                </button>
                            ) : (
                                <button className="event-register-btn" onClick={buyTicketHandler} disabled={isSoldOut}>
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
                            <button className="event-delete-btn" onClick={deleteEventHandler}>
                                Delete
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
