import { Routes, Route } from 'react-router';

import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Events from './components/events-catalog/Events.jsx';
import EventsEdit from './components/events-edit/EventsEdit.jsx';
import EventsCreate from './components/events-create/EventsCreate.jsx';
import EventsDetails from './components/events-details/EventsDetails.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Logout from './components/logout/Logout.jsx';
import Search from './components/search/Search.jsx';
import UserProfile from './components/user-profile/UserProfile.jsx';
import UserProvider from './components/providers/UserProvider.jsx';
import AuthGuard from './components/guards/AuthGuard.jsx';
import GuestGuard from './components/guards/GuestGuard.jsx';
import Info from './components/info/Info.jsx';

function App() {
    return (
        <UserProvider>
            <div className="app-container">
                <Header />

                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/events/:eventId/details" element={<EventsDetails />} />
                        <Route element={<AuthGuard />}>
                            <Route path="/events/:eventId/edit" element={<EventsEdit />} />
                            <Route path="/events/create" element={<EventsCreate />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/profile" element={<UserProfile />} />
                        </Route>
                        <Route element={<GuestGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                        <Route path="/search" element={<Search />} />
                        <Route path="/info" element={<Info />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </UserProvider>
    );
}

export default App;
