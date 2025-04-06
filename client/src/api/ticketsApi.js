import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import request from '../utils/request.js';

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/tickets`;

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

export const useTicketsDelete = (eventId) => {
    const { request } = useAuth();
    const [ticketsForDelete, setTicketsForDelete] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `eventId="${eventId}"`,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`).then(setTicketsForDelete);
    }, [eventId]);

    const deleteTickets = () => {
        ticketsForDelete.map((ticket) => {
            const ticketId = ticket._id;
            request.delete(`${baseUrl}/${ticketId}`);
        });
    };

    return { ticketsForDelete, deleteTickets };
};
