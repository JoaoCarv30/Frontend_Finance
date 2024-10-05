import React, {createContext, useEffect, useState, ReactNode } from 'react';




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

export const FetchShareApiContext = createContext({} as Transaction[]);


function FetchShareApiProvider({children}: FetchShareApiProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('http://localhost:5051/modeltransaction')
        .then(response => response.json())
        .then(data => setTransactions(data));
    }, []);

    return (
        <FetchShareApiContext.Provider value={transactions}>
            {children}
        </FetchShareApiContext.Provider>
    );	
}   

export default FetchShareApiProvider;



