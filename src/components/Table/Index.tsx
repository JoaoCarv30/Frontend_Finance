import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NewTransaction from '../NewTransaction/Index'


const TableTransaction = () => {
  return (
    <section className="w-screen  flex flex-col items-center justify-start mt-4">
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
            <TableRow>
              <TableCell className="font-medium">Lanche</TableCell>
              <TableCell>10R$</TableCell>
              <TableCell>Incomed</TableCell>
              <TableCell className="text-right">20/08/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lanche</TableCell>
              <TableCell>10R$</TableCell>
              <TableCell>Incomed</TableCell>
              <TableCell className="text-right">20/08/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lanche</TableCell>
              <TableCell>10R$</TableCell>
              <TableCell>Incomed</TableCell>
              <TableCell className="text-right">20/08/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lanche</TableCell>
              <TableCell>10R$</TableCell>
              <TableCell>Incomed</TableCell>
              <TableCell className="text-right">20/08/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

export default TableTransaction
