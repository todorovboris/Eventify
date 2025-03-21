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

function App() {
    const [authData, setAuthData] = useState({});

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
                        <Route path="/events" element={<Events />} />
                        <Route path="/events/create" element={<EventCreate />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </UserContext.Provider>
    );
}

export default App;
