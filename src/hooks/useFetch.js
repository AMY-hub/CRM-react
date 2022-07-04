import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, state) => {
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then((res) => {
            setData(res.data);
            setError(null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, [state]);

    return { loading, error, data };
}
