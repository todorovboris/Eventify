import { Link } from 'react-router';
import { useUserEvents } from '../../api/eventsApi.js';
import useAuth from '../../hooks/useAuth.js';

export default function UserProfile() {
    const { userId, username, email } = useAuth();
    const { events } = useUserEvents(userId);

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
                    {events.map((event) => (
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

// export default function Profile() {
//     return (
//         <div className="profile-container">
//             <div className="profile-info">
//                 <h2>John Doe</h2>
//                 <p>Email: johndoe@example.com</p>
//                 <p>Location: New York, USA</p>
//             </div>

//             <div className="events-section">
//                 <h3>My Events</h3>
//                 <ul>
//                     <li>Event 1 - 12 March 2025</li>
//                     <li>Event 2 - 25 March 2025</li>
//                     <li>Event 3 - 5 April 2025</li>
//                 </ul>
//             </div>

//             <button className="create-event-btn">Create Event</button>
//         </div>
//     );
// }
