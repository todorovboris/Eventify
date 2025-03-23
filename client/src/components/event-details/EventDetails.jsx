import { Link, useParams } from 'react-router';
import { useOneEvent } from '../../api/eventsApi.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.js';

export default function EventDetails() {
    const { eventId } = useParams();
    const { event } = useOneEvent(eventId);
    const { _id: userId } = useContext(UserContext);

    if (!event) {
        return <p>Loading...</p>;
    }

    const isOwner = event._ownerId === userId;
    const availableTickets = event.capacity - event.marked?.length;

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
                    <p className="event-tickets">Available Tickets: {availableTickets}</p>
                </div>
            </div>
            <div className="event-details-description">
                <h3>Description</h3>
                <p>{event.description}</p>
            </div>

            <div className="event-actions">
                {!isOwner && (
                    <>
                        {isSoldOut ? (
                            <button className="event-register-btn" disabled>
                                SOLD OUT
                            </button>
                        ) : (
                            <button className="event-register-btn">Buy Ticket</button>
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
        </div>
    );
}
