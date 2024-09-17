import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { DatePickerDemo } from '../DatePicker/Index'
import SelectPicker from '../SelectPicker/Index'

const NewTransaction = () => {
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
            <Label htmlFor="name" className="text-right">
              Descrição
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Valor
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Tipo
            </Label>
            <SelectPicker />

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Data
            </Label>
            <DatePickerDemo />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Adicionar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default NewTransaction