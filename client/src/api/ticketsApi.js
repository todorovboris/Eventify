import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/tickets';

export const useBuyTicket = () => {
    const { request } = useAuth();

    const buyTicket = (eventId) => {
        request.post(baseUrl, { eventId });
    };

    return { buyTicket };
};

export const useAllTickets = (eventId) => {
    const [soldTickets, setSoldTickets] = useState('');
    const { request } = useAuth();

    useEffect(() => {
        request.get(`${baseUrl}?where=eventId%3D%22${eventId}%22`).then(setSoldTickets);
    }, [eventId]);

    return { soldTickets };
};
