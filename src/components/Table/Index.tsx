import React, { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NewTransaction from '../NewTransaction/Index';

// Defina uma interface para os dados da transação
interface Transaction {
  id: number; // Ajuste o tipo conforme o seu modelo
  description: string;
  value: number;
  type: string;
  date: string; // Considerando que a data vem como string ISO
}

const TableTransaction: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Fetch data from API when the component is mounted
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5051/modeltransaction');
        const data: Transaction[] = await response.json();
        setTransactions(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
              <TableHead className="text-right">Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>
                    {transaction.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell className="text-right">{new Date(transaction.date).toLocaleDateString('pt-BR')}</TableCell>
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
    </section>
  );
};

export default TableTransaction;
