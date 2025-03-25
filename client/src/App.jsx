import { Routes, Route } from 'react-router';

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
import UserProvider from './components/providers/UserProvider.jsx';

function App() {
    return (
        <UserProvider>
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
        </UserProvider>
    );
}

export default App;
