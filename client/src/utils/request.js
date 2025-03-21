const request = async (method, url, eventData = null, options = {}) => {
    const updatedOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    };

    if (eventData) {
        updatedOptions.body = JSON.stringify(eventData);
    }

    const response = await fetch(url, updatedOptions);

    if (!response.headers.get('Content-Type')) return;

    const result = await response.json();
    return result;
};

export default {
    get: (url, options) => request('GET', url, null, options),
    post: (url, eventData, options) => request('POST', url, eventData, options),
    put: (url, eventData, options) => request('PUT', url, eventData, options),
    delete: (url, options) => request('DELETE', url, null, options),
    baseRequest: request,
};
