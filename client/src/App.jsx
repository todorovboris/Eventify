import { Routes, Route, Router } from 'react-router';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Events from './components/Events.jsx';
import Search from './components/Search.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
        // <Router>
        //     <Header />

        //     <Routes>
        //     </Routes>
        // </Router>
    );
}

export default App;
