import React, { useState } from 'react';

function EventCreate() {
    const createEventHandler = (formData) => {
        console.log('Event:', Object.fromEntries(formData));
    };

    return (
        <div className="create-event-form-container">
            <h2>Create your new event</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form action={createEventHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input name="title" type="text" id="title" defaultValue="" required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" defaultValue="" rows="4" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input name="date" type="date" id="date" defaultValue="" required />
                </div>

                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input name="time" type="time" id="time" defaultValue="" required />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input name="location" type="text" id="location" defaultValue="" required />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category" defaultValue="" required>
                        <option value="" disabled>
                            Choose category
                        </option>
                        <option value="music">Music</option>
                        <option value="sports">Sport</option>
                        <option value="arts">Arts</option>
                        <option value="conference">Conference</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Max Capacity:</label>
                    <input name="capacity" type="number" id="capacity" defaultValue="" />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input name="imageUrl" type="text" id="image" accept="image/*" placeholder="https://..." />
                    {/* <input type="file" id="image" accept="image/*" onChange={handleImageChange} /> */}
                    {/* {image && <p>Selected image: {image.name}</p>} */}
                </div>

                <button type="submit">Create event</button>
            </form>
        </div>
    );
}

export default EventCreate;

// import React, { useState } from 'react';

// function EventCreate() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [location, setLocation] = useState('');
//     const [category, setCategory] = useState('');
//     const [image, setImage] = useState(null); // За качване на изображение

//     const createEventHandler = (formData) => {
//         // event.preventDefault();
//         // Тук може да добавите логика за изпращане на данните към сървър или друга обработка
//         const eventData = {
//             title,
//             description,
//             date,
//             time,
//             location,
//             category,
//             image,
//         };
//         console.log('Event:', Object.fromEntries(formData));
//         // След изпращане може да ресетирате формата
//         setTitle('');
//         setDescription('');
//         setDate('');
//         setTime('');
//         setLocation('');
//         setCategory('');
//         setImage(null);
//     };

//     const handleImageChange = (event) => {
//         if (event.target.files && event.target.files[0]) {
//             setImage(event.target.files[0]);
//         }
//     };

//     return (
//         <div className="create-event-form-container">
//             <h2>Create your new event</h2>
//             {/* <form onSubmit={handleSubmit}> */}
//             <form action={createEventHandler}>
//                 <div className="form-group">
//                     <label htmlFor="title">Title:</label>
//                     <input name="title" type="text" id="title" defaultValue="" onChange={(e) => setTitle(e.target.value)} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                     <textarea name="description" id="description" defaultValue="" onChange={(e) => setDescription(e.target.value)} rows="4" required></textarea>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="date">Date:</label>
//                     <input name="date" type="date" id="date" defaultValue="" onChange={(e) => setDate(e.target.value)} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="time">Time:</label>
//                     <input name="time" type="time" id="time" defaultValue="" onChange={(e) => setTime(e.target.value)} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="location">Location:</label>
//                     <input name="location" type="text" id="location" defaultValue="" onChange={(e) => setLocation(e.target.value)} required />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="category">Category:</label>
//                     <select name="category" id="category" defaultValue="" onChange={(e) => setCategory(e.target.value)} required>
//                         <option value="" disabled>
//                             Choose category
//                         </option>
//                         <option value="music">Music</option>
//                         <option value="sports">Sport</option>
//                         <option value="arts">Arts</option>
//                         <option value="conference">Conference</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="image">Image:</label>
//                     <input type="text" id="image" accept="image/*" placeholder="https://..." onChange={handleImageChange} />
//                     {/* <input type="file" id="image" accept="image/*" onChange={handleImageChange} /> */}
//                     {/* {image && <p>Selected image: {image.name}</p>} */}
//                 </div>

//                 <button type="submit">Create event</button>
//             </form>
//         </div>
//     );
// }

// export default EventCreate;
