import { Routes, Route, Router } from 'react-router';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Events from './components/Events.jsx';
import Search from './components/Search.jsx';
import UserProfile from './components/user-profile/UserProfile.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Footer from './components/footer/Footer.jsx';
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
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
