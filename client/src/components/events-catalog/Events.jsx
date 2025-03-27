import { Link } from 'react-router';
import { useAllEvents } from '../../api/eventsApi.js';
import { useState, useEffect } from 'react';

export default function Events() {
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(12);

    const { events } = useAllEvents();

    useEffect(() => {
        if (events) {
            setTotalPages(Math.ceil(events.length / eventsPerPage));
        }
    }, [events, eventsPerPage]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events?.slice(indexOfFirstEvent, indexOfLastEvent) || [];

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageClick(i)} className={currentPage === i ? 'active' : ''}>
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <section className="event-catalog">
            <div className="event-list">
                {currentEvents.map((event) => (
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

            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    {renderPageNumbers()}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            )}
        </section>
    );
}
