import { Link, useNavigate } from 'react-router';
import { useUserContext } from '../../contexts/UserContext.js';
import { useLogin } from '../../api/authApi.js';

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useUserContext();
    const { login } = useLogin();

    const loginHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        if (password == '' || email == '') {
            console.log('All fields are required!');
            return;
        }

        try {
            const authData = await login(email, password);

            if (authData.code >= 400) {
                return alert(authData.message);
            }

            userLoginHandler(authData);

            navigate(-1);
        } catch (err) {
            return alert(err.message);
        }
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
            <Link to="/register">Don't have an account? Sign up</Link>
        </div>
    );
}
