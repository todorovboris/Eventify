import { Link, useNavigate } from 'react-router';
import { useRegister } from '../../api/authApi.js';
import { useUserContext } from '../../contexts/UserContext.js';

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, username, password } = Object.fromEntries(formData);
        const confirmPassword = formData.get('rePassword');

        if (confirmPassword !== password) {
            console.log('Password missmatch!');
            return;
        }

        if (confirmPassword == '' || password == '' || email == '' || username == '') {
            console.log('All fields are required!');
            return;
        }

        try {
            const authData = await register(email, username, password);

            if (authData.code >= 400) {
                return alert(authData.message);
            }

            userLoginHandler(authData);

            navigate('/');
        } catch (err) {
            return alert(err.message);
        }
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
