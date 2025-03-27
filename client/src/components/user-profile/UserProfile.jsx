import { Link } from 'react-router';
import { useUserOwnEvents } from '../../api/eventsApi.js';
import useAuth from '../../hooks/useAuth.js';
import { useEffect, useState } from 'react';
import { useUserPurchasedTickets } from '../../api/ticketsApi.js';

export default function UserProfile() {
    const [myEvents, setMyEvents] = useState([]);

    const { userId, username, email } = useAuth();
    const { ownEvents } = useUserOwnEvents(userId);
    const { purchasedTickets } = useUserPurchasedTickets(userId);

    useEffect(() => {
        // setMyEvents([...ownEvents, ...purchasedTickets]);

        const combinedEvents = [...(ownEvents || []), ...(purchasedTickets || [])];

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const filteredEvents = combinedEvents.filter((event) => new Date(event.date) >= today);

        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

        setMyEvents(filteredEvents);
    }, [ownEvents, purchasedTickets]);

    console.log(myEvents);

    return (
        <div className="profile-container">
            <div className="profile-card">
                {/* <img src="/images/avatar.jpg" alt="Profile" className="profile-avatar" /> */}
                <h2>{username}</h2>
                <p className="email">
                    <strong>Email:</strong> {email}
                </p>
            </div>

            <div className="events-section">
                <h3>My Events</h3>
                <div className="events-grid">
                    {myEvents.map((event) => (
                        <Link to={`/events/${event._id}/details`} className="event-card" key={event._id}>
                            {event.title} - {event.date}
                        </Link>
                    ))}
                </div>
            </div>

            <Link to="/events/create">
                <button className="create-event-btn">Create Event</button>
            </Link>
        </div>
    );
}
