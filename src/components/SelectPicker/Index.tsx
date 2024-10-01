import React, { useState } from 'react';

const SelectPicker: React.FC<{ onChange: (value: number) => void }> = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState<number>(1); // Valor inicial para 'Entrada'

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value, 10);
        setSelectedOption(value); // Atualiza o valor selecionado
        onChange(value); // Passa o valor para o componente pai
    };

    return (
        <select value={selectedOption} onChange={handleSelectChange} className="p-2 border rounded-md">
            <option value={1}>Entrada</option> {/* Income = 1 */}
            <option value={2}>Saída</option>   {/* Expense = 2 */}
        </select>
    );
};

export default SelectPicker;
