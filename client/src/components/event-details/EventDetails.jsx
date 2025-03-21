import { useParams } from 'react-router';
import { useOneEvent } from '../../api/eventsApi.js';

export default function EventDetails() {
    const { eventId } = useParams();
    const { event } = useOneEvent(eventId);

    if (!event) {
        return <p>Loading...</p>;
    }

    let isSoldOut = false;

    if (event.marked?.length >= event.capacity) {
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
                    {/* <p>Available tickets: {event.}</p> */}
                </div>
            </div>
            <div className="event-details-description">
                <h3>Description</h3>
                <p>{event.description}</p>
            </div>
            {isSoldOut ? (
                <button className="event-register-btn" disabled>
                    SOLD OUT
                </button>
            ) : (
                <button className="event-register-btn">Buy Ticket</button>
            )}
        </div>
    );
}
