export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="/">
                        {/* <img src="/images/eventify_logo.png" alt="Eventify" /> */}
                        Eventify
                    </a>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
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
                <div className="search">
                    <input type="text" placeholder="Search for event..." />
                    <button>Search</button>
                </div>
            </nav>
        </header>
    );
}
