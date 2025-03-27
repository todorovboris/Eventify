import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/events';

export const useOneEvent = (eventId) => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${eventId}`).then(setEvent);
    }, [eventId]);

    return { event };
};

export const useAllEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        request.get(baseUrl).then(setEvents);
    }, []);

    return { events };
};

export const useEventCreate = () => {
    const { request, _id } = useAuth();

    const createEvent = (eventData) => {
        return request.post(baseUrl, { ...eventData, capacity: Number(eventData.capacity), marked: [_id] });
    };

    return { createEvent };
};

export const useLatestEvents = () => {
    const [latestEvents, setLatestEvents] = useState([]);

    useEffect(() => {
        const seaerchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 5,
            // select: '_id,_ownerId,title',
        });

        request.get(`${baseUrl}?${seaerchParams.toString()}`).then(setLatestEvents);
    }, []);

    return { latestEvents };
};

export const useTopEvents = () => {
    const [topEvents, setTopEvents] = useState([]);

    useEffect(() => {
        const seaerchParams = new URLSearchParams({
            sortBy: 'capacity desc',
            pageSize: 5,
        });

        request.get(`${baseUrl}?${seaerchParams.toString()}`).then(setTopEvents);
    }, []);

    return { topEvents };
};

export const useUserEvents = () => {
    const [events, setEvents] = useState([]);
    const { userId } = useAuth();

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: 'date',
            where: `_ownerId="${userId}"`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`).then(setEvents);
    }, [userId]);

    return { events };
};
