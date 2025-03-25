import { Routes, Route } from 'react-router';
import { useState } from 'react';

import { UserContext } from './contexts/UserContext.js';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Events from './components/events-catalog/Events.jsx';
import Search from './components/search/Search.jsx';
import UserProfile from './components/user-profile/UserProfile.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Footer from './components/footer/Footer.jsx';
import EventCreate from './components/event-create/EventCreate.jsx';
import Logout from './components/logout/Logout.jsx';
import EventDetails from './components/event-details/EventDetails.jsx';
import useStorageState from './hooks/useStorageState.js';

function App() {
    const [authData, setAuthData] = useStorageState('auth', {});

    const userLoginHandler = (userData) => {
        setAuthData(userData);
    };

    const userLogoutHandler = () => {
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            <div className="app-container">
                <Header />

                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/events/create" element={<EventCreate />} />
                        <Route path="/events/:eventId/details" element={<EventDetails />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
