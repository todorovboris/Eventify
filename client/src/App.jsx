import { Routes, Route, Router } from 'react-router';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Search from './components/Search.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Footer from './components/Footer.jsx';
import EventCreate from './components/EventCreate.jsx';

function App() {
    return (
        <div className="app-container">
            <Header />

            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/create" element={<EventCreate />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
