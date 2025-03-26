import { Link } from 'react-router';
import categoryOptions from '../../helpers/categoryOptions.js';
import { useLatestEvents, useTopEvents } from '../../api/eventsApi.js';

export default function Home() {
    const { latestEvents } = useLatestEvents();
    const { topEvents } = useTopEvents();

    return (
        <div className="home-page">
            <section className="hero">
                <h1>Find it. Join it. Live it.</h1>
                <p>The best place to create and participate in events.</p>
                <div className="search-box">
                    <input type="text" placeholder="Search for events..." className="search-input" />
                    <button className="search-btn">Search</button>
                </div>
            </section>

            <section className="events">
                <h2>LATEST EVENTS</h2>
                <div className="event-list">
                    {latestEvents.map((event) => (
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
            </section>

            <section className="events">
                <h2>TOP EVENTS</h2>
                <div className="event-list">
                    {topEvents.map((event) => (
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
            </section>

            <section className="how-it-works">
                <h2>How it works?</h2>
                <div className="steps">
                    <div className="step">🔍 Browse events</div>
                    <div className="step">📝 Register</div>
                    <div className="step">🎟️ Create your own event</div>
                    <div className="step">🤝 Connect with people</div>
                </div>
            </section>
        </div>
    );
}
