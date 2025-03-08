export default function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <a href="/" className="footer-link">
                    Home
                </a>
                <a href="/events" className="footer-link">
                    Events
                </a>
                <a href="/profile" className="footer-link">
                    Profile
                </a>
            </nav>

            <p>&copy; Copyright - Eventify {new Date().getFullYear()} </p>
        </footer>
    );
}
