export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-card">
                {/* <img src="/images/avatar.jpg" alt="Profile" className="profile-avatar" /> */}
                <h2>John Doe</h2>
                <p className="email">
                    <strong>Email:</strong> johndoe@example.com
                </p>
                <p className="location">
                    <strong>Location:</strong> New York, USA
                </p>
            </div>

            <div className="events-section">
                <h3>My Events</h3>
                <div className="events-grid">
                    <div className="event-card">Event 1 - 12 March 2025</div>
                    <div className="event-card">Event 2 - 25 March 2025</div>
                    <div className="event-card">Event 3 - 5 April 2025</div>
                </div>
            </div>

            <button className="create-event-btn">Create Event</button>
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

// export default function Profile() {
//     return (
//         <div className="profile-container">
//             <div className="profile-card">
//                 <h2>John Doe</h2>
//                 <p>
//                     <strong>Email:</strong> johndoe@example.com
//                 </p>
//                 <p>
//                     <strong>Location:</strong> New York, USA
//                 </p>
//             </div>

//             <div className="events-section">
//                 <h3>My Events</h3>
//                 <ul>
//                     <li>Event 1 - 12 March 2025</li>
//                     <li>Event 2 - 25 March 2025</li>
//                     <li>Event 3 - 5 April 2025</li>
//                 </ul>
//             </div>

//             <button className="create-event-btn">+ Create Event</button>
//         </div>
//     );
// }
