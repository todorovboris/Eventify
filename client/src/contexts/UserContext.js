import { createContext, useContext } from 'react';

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
});

export function useUserContext() {
    const userData = useContext(UserContext);

    return userData;
}
