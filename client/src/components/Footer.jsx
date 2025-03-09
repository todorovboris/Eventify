export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About us</h3>
                    {/* <p>Кратко описание на вашата организация.</p> */}
                    <p>
                        <a href="/introduce" className="footer-button">
                            Contact us
                        </a>
                    </p>
                    <p>
                        <a href="/contact" className="footer-button">
                            More information
                        </a>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Information</h3>

                    <p>
                        <a href="/privacy" className="footer-button">
                            Privacy policy
                        </a>
                    </p>
                    <p>
                        <a href="/terms" className="footer-button">
                            Terms and conditions
                        </a>
                    </p>
                    {/* <li>
                            <a href="/sitemap" className="footer-button">Карта на сайта</a>
                        </li> */}
                </div>
                <div className="footer-section">
                    <h3>Contacts</h3>
                    <p>
                        Email: <a href="mailto:info@example.com">info@eventify.com</a>
                    </p>
                    <p>Phone: +359 123 456 789</p>
                    <p>Address: "Street" str. 1, Sofia</p>
                </div>
                <div className="footer-section">
                    <h3>Socials</h3>
                    <div className="social-icons">
                        <a href="http://facebook.com">
                            <img src="/images/facebook.svg" alt="Facebook" />
                        </a>
                        <a href="http://instagram.com">
                            <img src="/images/instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright - Eventify {new Date().getFullYear()} </p>
            </div>
        </footer>
    );
}
