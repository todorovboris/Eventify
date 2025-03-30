import { Navigate, useNavigate, useParams } from 'react-router';
import { useEventEdit, useOneEvent } from '../../api/eventsApi.js';
import categoryOptions from '../../helpers/categoryOptions.js';
import useAuth from '../../hooks/useAuth.js';
import { useEffect, useState } from 'react';

export default function EventsEdit() {
    const { eventId } = useParams();
    const { event } = useOneEvent(eventId);
    const { edit } = useEventEdit();
    const navigate = useNavigate();
    const { userId } = useAuth();

    // const isOwner = userId == event._ownerId;
    // if (!isOwner) {
    //     return <Navigate to="/events" />;
    // }

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        if (event?.category) {
            setSelectedCategory(event.category);
        }
    }, [event]);

    const categories = categoryOptions(event.category);

    const editEventHandler = async (formData) => {
        const newEventData = Object.fromEntries(formData);
        if (newEventData.capacity) {
            newEventData.capacity = Number(newEventData.capacity);
        }

        await edit(eventId, newEventData);

        navigate(`/events/${eventId}/details`);
    };

    const editCancelHandler = () => {
        navigate(`/events/${eventId}/details`);
    };

    return (
        <div className="create-event-form-container">
            <h2>Edit your event</h2>
            <form action={editEventHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input name="title" type="text" id="title" defaultValue={event.title} required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" defaultValue={event.description} rows="4" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input name="date" type="date" id="date" defaultValue={event.date} required />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input name="time" type="time" id="time" defaultValue={event.time} required />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input name="location" type="text" id="location" defaultValue={event.location} required />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                        <option value="" disabled>
                            Choose category
                        </option>
                        {categories.map((category) => (
                            <option value={category.value} key={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Max Capacity:</label>
                    <input name="capacity" type="number" id="capacity" defaultValue={event.capacity} />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input name="imageUrl" type="text" id="image" accept="image/*" placeholder="https://..." defaultValue={event.imageUrl} />
                    {/* <input type="file" id="image" accept="image/*" onChange={handleImageChange} /> */}
                    {/* {image && <p>Selected image: {image.name}</p>} */}
                </div>

                <button type="submit">Edit event</button>
                <button className="cancel-btn" onClick={editCancelHandler}>
                    Cancel
                </button>
            </form>
        </div>
    );
}
