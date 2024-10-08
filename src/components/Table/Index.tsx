import React, { useEffect, useState, useContext } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import NewTransaction from '../NewTransaction/Index';
import { CiEdit, CiTrash } from "react-icons/ci";
import ToastOk from '../ToastOk/Index';
import { FetchShareApiContext } from '@/context/FetchShareApi';

const TableTransaction: React.FC = () => {
    const [IsDeleted, setIsDeleted] = useState<boolean>(false);

    // Extraia as transações e a função HandleDelete do contexto
    const { transactions, HandleDelete } = useContext(FetchShareApiContext);

    const HandleEdit = async (id: number) => {
        try {
            // Função de edição...
        } catch (error) {
            console.error('Erro ao editar transação:', error);
            alert('Erro ao editar a transação.');
        }
    };

    return (
        <section className="w-screen flex flex-col items-center justify-start mt-4">
            <div className="w-4/5 flex flex-col">
                <div className="flex justify-between w-full mb-4">
                    <div></div>
                    <NewTransaction />
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Descrição</TableHead>
                            <TableHead>Valor</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Data</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell className="font-medium">{transaction.description}</TableCell>
                                    <TableCell className={transaction.type === 1 ? 'text-green-500' : 'text-red-500'}>
                                        {transaction.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </TableCell>

                                    <TableCell>{transaction.type}</TableCell>
                                    <TableCell>{new Date(transaction.date).toLocaleDateString('pt-BR')}</TableCell>
                                    <TableCell className="font-medium">
                                        <button onClick={() => HandleEdit(transaction.id)}><CiEdit size={30} /></button>
                                        <button onClick={() => HandleDelete(transaction.id)}><CiTrash color='red' size={30} /></button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">Nenhuma transação encontrada</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {IsDeleted && <ToastOk />}
        </section>
    );
};

export default TableTransaction;
