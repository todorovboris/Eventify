import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.js';
import request from '../utils/request.js';

export default function useAuth() {
    const authData = useContext(UserContext);

    const requestWrapper = (method, url, eventData, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers,
            },
        };

        return request.baseRequest(method, url, eventData, authData.accessToken ? authOptions : options);
    };

    return {
        ...authData,
        userId: authData._id,
        isAuthenticated: !!authData.accessToken,
        request: {
            get: (url, options) => requestWrapper('GET', url, null, options),
            post: (url, data, options) => requestWrapper('POST', url, data, options),
            put: (url, data, options) => requestWrapper('PUT', url, data, options),
            delete: (url, options) => requestWrapper('DELETE', url, null, options),
        },
    };
}
