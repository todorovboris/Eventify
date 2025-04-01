import { Navigate } from 'react-router';
import { useLogout } from '../../api/authApi.js';

export default function Logout() {
    try {
        const { isLoggedOut } = useLogout();

        return isLoggedOut ? <Navigate to="/" /> : null;
    } catch (err) {
        return alert(err.message);
    }
}
