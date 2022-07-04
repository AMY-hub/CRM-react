import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [data]);

    function getValue() {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return initialValue;
        }
    }

    return [data, setData];
}