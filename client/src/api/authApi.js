import { useEffect } from 'react';
import request from '../utils/request.js';
import { useUserContext } from '../contexts/UserContext.js';

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`;

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
    const { accessToken, userLogoutHandler } = useUserContext();

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
