import { Link } from 'react-router';

export default function Register() {
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form>
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <input type="password" placeholder="Repeat Password" name="rePassword" required />
                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>
            {/* <a href="#">Forgot password?</a> */}
            <Link to="/login">Already registered? Log in</Link>
        </div>
    );
}
