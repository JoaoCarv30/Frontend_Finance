import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DatePickerDemo } from '../DatePicker/Index';
import SelectPicker from '../SelectPicker/Index';
import { Toast } from '@radix-ui/react-toast';
import ToastOk from '../ToastOk/Index';

const NewTransaction: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const [value, setValue] = useState<number>(0);
    const [type, setType] = useState<number>(1); // Estado para controlar o tipo (Entrada ou Saída)
    const [date, setDate] = useState<Date | null>(null);

    const handleSubmit = async () => {
        const transaction = {
            description,
            value,
            type, // Envia 1 para Entrada ou 2 para Saída
            createdAt: date?.toISOString(),
        };

        try {
            const response = await fetch('http://localhost:5051/modeltransaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transaction),
            });

            if (!response.ok) {
                throw new Error('Error creating transaction');
            }

            <ToastOk />
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create transaction');
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>New Transaction</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Adicione uma Nova Transação</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Descrição
                        </Label>
                        <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="value" className="text-right">
                            Valor
                        </Label>
                        <Input id="value" type="number" value={value} onChange={(e) => setValue(parseFloat(e.target.value))} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                            Tipo
                        </Label>
                        <SelectPicker onChange={setType} /> {/* Passa a função setType */}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                            Data
                        </Label>
                        <DatePickerDemo onChange={setDate} />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={handleSubmit}>Adicionar</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default NewTransaction;



