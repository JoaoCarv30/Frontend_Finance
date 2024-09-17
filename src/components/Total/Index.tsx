import React from 'react'
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";


const Total = () => {

    const auxEntradas = 17400
    const auxSaidas = 1400
    const auxTotal = auxEntradas - auxSaidas

    return (
        <section className='w-screen flex items-center justify-center gap-20 p-20 bg-customGrey-50'>
            <div className='w-1/6 p-6 bg-white rounded-md'>
                <div className='flex items-center justify-between'>
                    <span className='text-lg text-customBlue'>Entradas</span>
                    <IoArrowUpCircleOutline color="green" size={30} />
                </div>
                <h1 className='font-bold text-3xl font-gow text-customBlue'>    {auxEntradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
            </div>

            <div className='w-1/6 p-6 bg-white rounded-md'>
                <div className='flex items-center justify-between'>
                    <span className='text-lg text-customBlue'>Saídas</span>
                    <IoArrowDownCircleOutline color="red" size={30} />
                </div>
                <h1 className='font-bold text-3xl font-gow text-customBlue'>  {auxSaidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
            </div>

            <div className={`w-1/6 p-6 rounded-md text-white ${auxTotal >= 0 ? 'bg-customGreen' : 'bg-customRed'}`}>
                <div className='flex items-center justify-between'>
                    <span className='text-lg'>Total</span>
                    <TfiMoney color="white" size={30} />
                </div>
                <h1 className='font-bold text-3xl font-gow'>
                    {auxTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </h1>
            </div>
        </section>

    )
}

export default Total 