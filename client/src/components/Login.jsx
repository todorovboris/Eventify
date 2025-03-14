import { Link } from 'react-router';

export default function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <button type="submit" className="login-btn">
                    Login
                </button>
            </form>
            {/* <a href="#">Forgot password?</a> */}
            <Link to="/register">Don't have an account? Sign up</Link>
        </div>
    );
}
