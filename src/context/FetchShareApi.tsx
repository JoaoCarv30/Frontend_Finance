import { Delete } from '@/Functions/FetchAPi';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface FetchShareApiProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    description: string;
    value: number;
    type: number;
    date: string; 
}

interface FetchShareApiContextType {
    transactions: Transaction[];
    HandleDelete: (id: number) => Promise<void>;
}

export const FetchShareApiContext = createContext({} as FetchShareApiContextType);

function FetchShareApiProvider({ children }: FetchShareApiProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('http://localhost:5051/modeltransaction')
            .then(response => response.json())
            .then(data => setTransactions(data));
    }, [transactions]);

    const HandleDelete = async (id: number) => {
        try {
            await Delete(id);
            // Remove a transação do estado local
            setTransactions(transactions.filter((transaction) => transaction.id !== id));
        } catch (error) {
            console.error('Erro ao deletar transação:', error);
            alert('Erro ao deletar a transação.');
        }
    };

    return (
        <FetchShareApiContext.Provider value={{ transactions, HandleDelete }}>
            {children}
        </FetchShareApiContext.Provider>
    );
}

export default FetchShareApiProvider;
