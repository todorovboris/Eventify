import { Link, useNavigate } from 'react-router';
import { useLogin } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.js';

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const authData = await login(email, password);
        userLoginHandler(authData);

        navigate('/');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action={loginHandler}>
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
