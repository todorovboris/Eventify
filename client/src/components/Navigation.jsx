export default function Navigation() {
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img src="/images/Gemini_Generated_logoTextBig.jpeg" alt="Eventify" />
                    {/* Eventify */}
                </a>
            </div>
            <nav>
                <ul className="nav-links">
                    {/* <li>
                        <a href="/">Home</a>
                    </li> */}
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    <li>
                        <a href="/search">Search</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
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
                {/* <div className="search">
                    <input type="text" placeholder="Search for event..." />
                    <button>Search</button>
                </div> */}
            </nav>
        </header>
    );
}
