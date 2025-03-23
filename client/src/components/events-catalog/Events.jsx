import { useAllEvents } from '../../api/eventsApi.js';

export default function Events() {
    const { events } = useAllEvents();
    console.log(events);

    return (
        <div className="dashboard-page">
            <h2>Events Page</h2>
        </div>
    );
}
