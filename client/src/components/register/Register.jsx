import { Link, useNavigate } from 'react-router';
import { useRegister } from '../../api/authApi.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.js';

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);

    const registerHandler = async (formData) => {
        const { email, username, password } = Object.fromEntries(formData);
        const confirmPassword = formData.get('rePassword');

        if (confirmPassword !== password) {
            console.log('Password missmatch!');
            return;
        }

        const authData = await register(email, username, password);
        userLoginHandler(authData);

        navigate('/');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form action={registerHandler}>
                <input type="email" placeholder="Email" name="email" required />
                <input type="text" placeholder="Username" name="username" required />
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
