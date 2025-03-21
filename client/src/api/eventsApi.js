import useAuth from '../hooks/useAuth.js';

const baseUrl = 'http://localhost:3030/data/events';

export const useEventCreate = () => {
    const { request, _id } = useAuth();

    const createEvent = (eventData) => {
        return request.post(baseUrl, { ...eventData, marked: [_id] });
    };

    return { createEvent };
};
