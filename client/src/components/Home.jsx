export default function Home() {
    return (
        <div className="home-page">
            <>
                <section className="hero">
                    <h1>Discover. Organize. Survive.</h1>
                    <p>The best place to create and participate in events.</p>
                    <div className="hero-buttons">
                        <a href="/events" className="btn">
                            Search for event
                        </a>
                        {/* <a href="/create-event" className="btn secondary">
                            Create event
                        </a> */}
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
                        <div className="category">Музика</div>
                        <div className="category">Технологии</div>
                        <div className="category">Бизнес</div>
                        <div className="category">Спорт</div>
                    </div>
                </section>

                <section className="how-it-works">
                    <h2>How it works?</h2>
                    <div className="steps">
                        <div className="step">🔍 Разгледай събития</div>
                        <div className="step">📝 Регистрирай се</div>
                        <div className="step">🎟️ Създай свое събитие</div>
                        <div className="step">🤝 Свържи се с хора</div>
                    </div>
                </section>
            </>
        </div>
    );
}
