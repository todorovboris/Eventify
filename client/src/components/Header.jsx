export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href="/">
                        <img src="/images/LogoTextBig.jpeg" alt="Eventify" />
                        {/* <img src="/images/logo_img.jpg" alt="Eventify" className="logo_img" /> */}
                        {/* <img src="/images/logo_text.jpg" alt="Eventify" className="logo_text" /> */}
                    </a>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="/events">Events</a>
                        </li>
                        <li>
                            <a href="/events">Artists</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/search">Search</a>
                        </li>
                    </ul>
                    <ul className="nav-auth">
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/register">Register</a>
                        </li>
                        <li>
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
