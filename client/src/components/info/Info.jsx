import { Link } from 'react-router';

export default function Info() {
    return (
        <section className="how-it-works">
            <h2>How it works?</h2>
            <div className="steps">
                <Link to="/events" className="step">
                    🔍 Browse events
                </Link>
                <Link to="/register" className="step">
                    📝 Register
                </Link>
                <Link to="/events/create" className="step">
                    🎟️ Create your own event
                </Link>
                <div className="step">🤝 Connect with people</div>
            </div>
        </section>
    );
}
