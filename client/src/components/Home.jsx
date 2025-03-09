import { Link } from 'react-router';

export default function Home() {
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

                <section className="events">
                    <h2>TOP EVENTS</h2>
                    <div className="event-list">
                        <div className="event-card">
                            <h3>Tech Summit 2025</h3> <p>София, 12 Юни</p>
                        </div>
                        <div className="event-card">
                            <h3>Music Fest</h3> <p>Пловдив, 5 Юли</p>
                        </div>
                        <div className="event-card">
                            <h3>Startup Weekend</h3> <p>Варна, 20 Август</p>
                        </div>
                        <div className="event-card">
                            <h3>Art Expo</h3> <p>Бургас, 3 Септември</p>
                        </div>
                    </div>
                </section>

                <section className="categories">
                    <h2>CATEGORIES</h2>
                    <div className="category-list">
                        <div className="category">Music</div>
                        <div className="category">Technologies</div>
                        <div className="category">Business</div>
                        <div className="category">Sport</div>
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
