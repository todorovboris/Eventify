import { Link } from 'react-router';
import { useAllEvents, useUserOwnEvents } from '../../api/eventsApi.js';
import useAuth from '../../hooks/useAuth.js';
import { useEffect, useState } from 'react';
import { useUserPurchasedTickets } from '../../api/ticketsApi.js';

export default function UserProfile() {
    const [myNextEvents, setMyNextEvents] = useState([]);
    const [matchingTickets, setMatchingTickets] = useState([]);

    const { userId, username, email } = useAuth();
    const { ownEvents } = useUserOwnEvents(userId);
    const { purchasedTickets } = useUserPurchasedTickets(userId);
    const { events } = useAllEvents();

    useEffect(() => {
        const eventIds = new Set(events.map((event) => event._id));
        setMatchingTickets(purchasedTickets.filter((ticket) => eventIds.has(ticket.eventId)));
    }, [purchasedTickets, events]);

    useEffect(() => {
        const combinedEvents = [...(ownEvents || []), ...(matchingTickets || [])];

        const sortedEvents = combinedEvents.sort((a, b) => {
            const dateTimeA = new Date(`${a.date}T${a.time}`);
            const dateTimeB = new Date(`${b.date}T${b.time}`);
            return dateTimeA - dateTimeB;
        });

        setMyNextEvents(sortedEvents);
    }, [ownEvents, matchingTickets]);

    const nextEvent = myNextEvents.shift();

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="user-info">
                    <div>
                        <h2>{username}</h2>
                        <p className="email">
                            <strong>Email:</strong> {email}
                        </p>
                    </div>
                    <Link to="/events/create">
                        <button className="create-event-btn">Create Event</button>
                    </Link>
                </div>

                {nextEvent && (
                    <div className="next-event-container">
                        <div className="next-event-info">
                            <h3>Next Event:</h3>
                            {/* <p>📍 {nextEvent.location}</p> */}
                            <p>{nextEvent.date}</p>
                        </div>

                        <Link to={`/events/${nextEvent._id}/details`} className="next-event" key={nextEvent._id}>
                            <img src={nextEvent.imageUrl} alt={nextEvent.title} className="event-image" />
                            <div className="event-info">
                                <h3>{nextEvent.title}</h3>
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className="events-section">
                <h3>My Own Events</h3>
                <div className="events-grid">
                    {ownEvents.length > 0 ? (
                        ownEvents.map((event) => (
                            <Link to={`/events/${event._id}/details`} className="event-card" key={event._id}>
                                <h4>{event.title}</h4>
                                <p>{event.date}</p>
                            </Link>
                        ))
                    ) : (
                        <p>No events created.</p>
                    )}
                </div>
            </div>

            <div className="events-section">
                <h3>My Purchased Events</h3>
                <div className="events-grid">
                    {matchingTickets.length > 0 ? (
                        matchingTickets.map((event) => (
                            <Link to={`/events/${event.eventId}/details`} className="event-card" key={event.eventId}>
                                <h4>{event.title}</h4>
                                <p>{event.date}</p>
                            </Link>
                        ))
                    ) : (
                        <p>No tickets purchased.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
