import { useEffect, useState } from 'react';
import type { CELEC } from '../types/Dashboardtypes';


import DataHour from '../interface/DataHour';

interface DataFetcherOutput {
    data: DataHour[] | null;
    loading: boolean;
    error: string | null;
}

export default function DataFetcher() : DataFetcherOutput {
    const [data, setData] = useState<DataHour[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const url = `https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json`


        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
                }
                const result = await response.json();
                // Si el resultado es un array, lo usamos directamente
                if (Array.isArray(result)) {
                    setData(result);
                } else if (result && typeof result === 'object') {
                    // Si es un objeto, lo convertimos a array
                    setData([result]);
                } else {
                    setData([]);
                }
            } catch (err: any) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocurrió un error desconocido al obtener los datos.");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return { data, loading, error };

}