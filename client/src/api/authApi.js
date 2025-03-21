import { useContext, useEffect } from 'react';
import request from '../utils/request.js';
import { UserContext } from '../contexts/UserContext.js';

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        return request.post(`${baseUrl}/login`, { email, password });
    };

    return { login };
};

export const useRegister = () => {
    const register = async (email, username, password) => {
        return request.post(`${baseUrl}/register`, { email, username, password });
    };

    return { register };
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) return;

        const options = {
            headers: {
                'X-Authorization': accessToken,
            },
        };

        request.get(`${baseUrl}/logout`, options).then(userLogoutHandler);
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};
