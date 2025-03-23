import { useContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';
import request from '../utils/request.js';
import { UserContext } from '../contexts/UserContext.js';

const baseUrl = 'http://localhost:3030/data/tickets';

export const useEventAttend = () => {
    const { request } = useAuth();

    const buyTicket = (eventId) => {
        request.post(baseUrl, { eventId });
    };

    return { buyTicket };
};
