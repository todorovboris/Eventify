import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/tickets';

export const useBuyTicket = () => {
    const { request } = useAuth();

    const buyTicket = (eventId) => {
        return request.post(baseUrl, { eventId });
    };

    return { buyTicket };
};

export const useTickets = (eventId) => {
    const { request } = useAuth();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `eventId="${eventId}"`,
            // load: `owner=_ownerId:users`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`).then(setTickets);
    }, [eventId]);

    const addTicket = (ticketData) => {
        setTickets((prevTickets) => [...prevTickets, ticketData]);
    };

    return { tickets, addTicket };
};
