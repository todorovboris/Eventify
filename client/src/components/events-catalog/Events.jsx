import { Link } from 'react-router';
import { useAllEvents } from '../../api/eventsApi.js';

export default function Events() {
    const { events } = useAllEvents();

    return (
        <>
            <div className="event-list">
                {events.map((event) => (
                    <Link to={`/events/${event._id}/details`} className="event-card" key={event._id}>
                        <img src={event.imageUrl} alt={event.title} className="event-image" />
                        <div className="event-info">
                            <h3>{event.title}</h3>
                            <p>
                                {event.location}, {event.date}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
