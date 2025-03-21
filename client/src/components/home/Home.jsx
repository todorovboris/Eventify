import { Link } from 'react-router';
import categoryOptions from '../../helpers/categoryOptions.js';
import { useLatestEvents } from '../../api/eventsApi.js';

export default function Home() {
    const categories = categoryOptions();
    const { latestEvents } = useLatestEvents();

    return (
        <div className="home-page">
            <>
                <section className="hero">
                    <h1>Find it. Join it. Live it.</h1>
                    <p>The best place to create and participate in events.</p>
                    <div className="search-box">
                        <input type="text" placeholder="Search for events..." className="search-input" />
                        <button className="search-btn">Search</button>
                    </div>
                </section>

                <section className="categories">
                    <h2>CATEGORIES</h2>
                    <div className="category-list">
                        {categories.map((category) => (
                            <div className="category" key={category.label}>
                                {category.label}
                            </div>
                        ))}
                        {/* <div className="category">Music</div>
                        <div className="category">Technologies</div>
                        <div className="category">Business</div>
                        <div className="category">Sport</div> */}
                    </div>
                </section>

                <section className="events">
                    <h2>LATEST EVENTS</h2>
                    <div className="event-list">
                        {latestEvents.map((event) => (
                            <div className="event-card">
                                <img src={event.imageUrl} alt={event.title} className="event-image" />
                                <div className="event-info">
                                    <h3>{event.title}</h3>
                                    <p>
                                        {event.location}, {event.date}
                                    </p>
                                </div>
                            </div>
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
            </>
        </div>
    );
}
