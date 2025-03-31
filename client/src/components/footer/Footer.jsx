import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About us</h3>
                    <p>
                        <Link to="/contacts" className="footer-button">
                            Contact us
                        </Link>
                    </p>
                    <p>
                        <Link to="/info" className="footer-button">
                            More information
                        </Link>
                    </p>
                    <p>
                        <Link to="/search" className="footer-button">
                            Search event
                        </Link>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Information</h3>

                    <p>
                        <Link to="/privacy" className="footer-button">
                            Privacy policy
                        </Link>
                    </p>
                    <p>
                        <Link to="/terms" className="footer-button">
                            Terms and conditions
                        </Link>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Contacts</h3>
                    <p>
                        Email: <Link to="mailto:info@example.com">info@eventify.com</Link>
                    </p>
                    <p>Phone: +359 123 456 789</p>
                    <p>Address: "Street" str. 1, Sofia</p>
                </div>
                <div className="footer-section">
                    <h3>Socials</h3>
                    <div className="social-icons">
                        <Link to="http://facebook.com">
                            <img src="/images/facebook.svg" alt="Facebook" />
                        </Link>
                        <Link to="http://instagram.com">
                            <img src="/images/instagram.svg" alt="Instagram" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright - Eventify {new Date().getFullYear()} </p>
            </div>
        </footer>
    );
}
