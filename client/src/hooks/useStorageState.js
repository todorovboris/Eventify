import { useState } from 'react';

export default function useStorageState(stateKey, initState) {
    const setStorageFunction = () => {
        const storageStateJson = localStorage.getItem(stateKey);

        if (!storageStateJson) {
            return typeof initState === 'function' ? initState() : initState;
        }

        const storageStateData = JSON.parse(storageStateJson);

        return storageStateData;
    };

    const [state, setState] = useState(setStorageFunction);

    const setStorageState = (input) => {
        const data = typeof input === 'function' ? input(data) : input;

        const storageData = JSON.stringify(data);

        localStorage.setItem(stateKey, storageData);

        setState(data);
    };

    return [state, setStorageState];
}
