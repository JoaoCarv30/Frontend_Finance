import { FetchShareApiContext } from '@/context/FetchShareApi';
import React, { useState, useEffect, useContext } from 'react'
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";

const Total = () => {
    // Estado para armazenar as entradas, saídas e total
    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [total, setTotal] = useState(0);



    const {transactions} = useContext(FetchShareApiContext);        
    

    // Função para buscar os dados da API e calcular as somas
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:5051/modeltransaction');
                const data = await response.json();

                // Filtrar e somar valores das transações
                const somaEntradas = data
                    .filter((transaction: { type: number; }) => transaction.type === 1)
                    .reduce((acc: any, transaction: { value: any; }) => acc + transaction.value, 0);

                const somaSaidas = data
                    .filter((transaction: { type: number; }) => transaction.type === 2)
                    .reduce((acc: any, transaction: { value: any; }) => acc + transaction.value, 0);

                // Atualizar estados
                setEntradas(somaEntradas);
                setSaidas(somaSaidas);
                setTotal(somaEntradas - somaSaidas);
            } catch (error) {
                console.error('Erro ao buscar as transações:', error);
            }
        };

        fetchTransactions();
    }, [transactions]); // Executa uma vez ao montar o componente

    return (
        <section className='w-screen flex items-center justify-center gap-20 p-20 bg-customGrey-50'>
            <div className='w-1/6 p-6 bg-white rounded-md'>
                <div className='flex items-center justify-between'>
                    <span className='text-lg text-customBlue'>Entradas</span>
                    <IoArrowUpCircleOutline color="green" size={30} />
                </div>
                <h1 className='font-bold text-3xl font-gow text-customBlue'>
                    {entradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </h1>
            </div>

            <div className='w-1/6 p-6 bg-white rounded-md'>
                <div className='flex items-center justify-between'>
                    <span className='text-lg text-customBlue'>Saídas</span>
                    <IoArrowDownCircleOutline color="red" size={30} />
                </div>
                <h1 className='font-bold text-3xl font-gow text-customBlue'>
                    {saidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </h1>
            </div>

            <div className={`w-1/6 p-6 rounded-md text-white ${total >= 0 ? 'bg-customGreen' : 'bg-customRed'}`}>
                <div className='flex items-center justify-between'>
                    <span className='text-lg'>Total</span>
                    <TfiMoney color="white" size={30} />
                </div>
                <h1 className='font-bold text-3xl font-gow'>
                    {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </h1>
            </div>
        </section>
    )
}

export default Total;
