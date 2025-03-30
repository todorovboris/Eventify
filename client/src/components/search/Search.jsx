import { useState } from 'react';
import { useAllEvents } from '../../api/eventsApi.js';
import categoryOptions from '../../helpers/categoryOptions.js';
import { Link } from 'react-router';

export default function Search() {
    let [eventsResult, setEventsResult] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { events } = useAllEvents();

    const categories = categoryOptions();

    const eventSearchHandler = (formData) => {
        const inputData = formData.get('searchInput');
        const eventDataForSearch = inputData.toLowerCase();

        if (eventDataForSearch === '') {
            if (selectedCategory) {
                setEventsResult(events.filter((event) => event.category.includes(selectedCategory)));
            } else {
                setEventsResult([]);
            }
            return;
        }

        if (selectedCategory) {
            setEventsResult(
                events.filter(
                    (event) =>
                        event.category.includes(selectedCategory) &&
                        (event.title.toLowerCase().includes(eventDataForSearch) ||
                            event.description.toLowerCase().includes(eventDataForSearch) ||
                            event.date.toLowerCase().includes(eventDataForSearch) ||
                            event.location.toLowerCase().includes(eventDataForSearch))
                )
            );
        } else {
            setEventsResult(
                events.filter(
                    (event) =>
                        event.title.toLowerCase().includes(eventDataForSearch) ||
                        event.description.toLowerCase().includes(eventDataForSearch) ||
                        event.date.toLowerCase().includes(eventDataForSearch) ||
                        event.location.toLowerCase().includes(eventDataForSearch)
                )
            );
        }
    };

    const eventCategorySearchHandler = (e) => {
        const category = e.target.textContent;
        setSelectedCategory(category);
        setEventsResult(events.filter((event) => event.category.includes(category)));
    };

    return (
        <>
            <section className="categories">
                <h2>CATEGORIES</h2>
                <div className="category-list">
                    {categories.map((category) => (
                        <div
                            className={`category ${selectedCategory === category.label ? 'active' : ''}`}
                            key={category.label}
                            onClick={eventCategorySearchHandler}
                        >
                            {category.label}
                        </div>
                    ))}
                </div>
            </section>

            <section className="search-area">
                <form className="search-box" action={eventSearchHandler}>
                    <input type="text" name="searchInput" placeholder="Search for events..." className="search-input" />
                    <button className="search-btn">Търси</button>
                </form>
            </section>

            {eventsResult.length > 0 && (
                <section className="event-catalog">
                    <div className="event-list">
                        {eventsResult.map((event) => (
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
            )}
        </>
    );
}
