import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/LogoTextBig.jpeg" alt="Eventify" />
                        {/* <img src="/images/logo_img.jpg" alt="Eventify" className="logo_img" /> */}
                        {/* <img src="/images/logo_text.jpg" alt="Eventify" className="logo_text" /> */}
                    </Link>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/events">Artists</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                    <ul className="nav-auth">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
