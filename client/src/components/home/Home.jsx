import { Link } from 'react-router';
import { useAllEvents, useLatestEvents, useTopEvents } from '../../api/eventsApi.js';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    let [eventsResult, setEventsResult] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const { latestEvents } = useLatestEvents();
    const { topEvents } = useTopEvents();
    const { events } = useAllEvents();
    const searchResultsRef = useRef(null);

    const eventSearchHandler = (e) => {
        e.preventDefault();

        const eventDataForSearch = searchInput.toLowerCase().trim();

        const filteredEvents = events.filter(
            (event) =>
                event.title.toLowerCase().includes(eventDataForSearch) ||
                event.description.toLowerCase().includes(eventDataForSearch) ||
                event.date.toLowerCase().includes(eventDataForSearch) ||
                event.location.toLowerCase().includes(eventDataForSearch)
        );

        setEventsResult(filteredEvents);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setEventsResult([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchResultsRef]);

    return (
        <div className="home-page">
            <section className="hero">
                <h1>Find it. Join it. Live it.</h1>
                <p>The best place to create and participate in events.</p>
                <form className="search-box" onSubmit={eventSearchHandler}>
                    <input
                        type="text"
                        name="searchInput"
                        placeholder="Search for events..."
                        className="search-input"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className="search-btn">Търси</button>
                </form>

                {eventsResult.length > 0 && (
                    <div className="search-results" ref={searchResultsRef}>
                        {eventsResult.map((event) => (
                            <Link to={`/events/${event._id}/details`} className="search-result-item" key={event._id}>
                                <img src={event.imageUrl} alt={event.title} className="search-result-image" />
                                <div className="search-result-info">
                                    <h4>{event.title}</h4>
                                    <p>
                                        {event.location} | {event.date}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="latest-events">
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

            <section className="top-events">
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

            {/* <section className="how-it-works">
                <h2>How it works?</h2>
                <div className="steps">
                    <div className="step">🔍 Browse events</div>
                    <div className="step">📝 Register</div>
                    <div className="step">🎟️ Create your own event</div>
                    <div className="step">🤝 Connect with people</div>
                </div>
            </section> */}
        </div>
    );
}
