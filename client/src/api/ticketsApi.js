import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/tickets';

export const useBuyTicket = () => {
    const { request } = useAuth();

    const buyTicket = (eventId, title, date, imageUrl) => {
        return request.post(baseUrl, { eventId, title, date, imageUrl });
    };

    return { buyTicket };
};

export const useEventTickets = (eventId) => {
    const { request } = useAuth();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `eventId="${eventId}"`,
            load: `author=_ownerId:users`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`).then(setTickets);
    }, [eventId]);

    const addTicket = (ticketData) => {
        setTickets((prevTickets) => [...prevTickets, ticketData]);
    };

    return { tickets, addTicket };
};

export const useUserPurchasedTickets = (userId) => {
    const [purchasedTickets, setUserPurchasedTickets] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: 'date',
            where: `_ownerId="${userId}"`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`).then(setUserPurchasedTickets);
    }, [userId]);

    return { purchasedTickets };
};
