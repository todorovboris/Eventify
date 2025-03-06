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
            <hr />

            <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
        </footer>
    );
}
