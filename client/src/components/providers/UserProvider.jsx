import { UserContext } from '../../contexts/UserContext.js';
import useStorageState from '../../hooks/useStorageState.js';

export default function UserProvider({ children }) {
    const [authData, setAuthData] = useStorageState('auth', {});

    const userLoginHandler = (userData) => {
        setAuthData(userData);
    };

    const userLogoutHandler = () => {
        setAuthData({});
    };

    return <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>{children}</UserContext.Provider>;
}
