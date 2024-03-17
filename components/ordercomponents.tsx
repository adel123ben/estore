"use client";
import React from 'react'
import { TableRow, TableCell } from "@/components/ui/table"

type Props = {
    formulaires: {
        _id: string,
        name: string,
        createdAt: string,
        phone: number,
        wilaya: string,
        commune: string,
        quntity: number,
        product: {
            title: string,
            price: number
        },
    }
}

function Ordercomponents({ formulaires }: Props) {
    return (
        <TableRow>
            <TableCell className="font-medium hidden md:flex">e-store</TableCell>
            <TableCell>{formulaires.name}</TableCell>
            <TableCell>{formulaires.phone}</TableCell>
            <TableCell className='text-center 2xl:text-start'>{formulaires.quntity}</TableCell>
            <TableCell>{formulaires.wilaya}</TableCell>
            <TableCell>{formulaires.commune}</TableCell>
            {formulaires.product ? (
                <>
                    <TableCell>{formulaires.product.title}</TableCell>
                    <TableCell>{formulaires.product.price} DA</TableCell>
                </>
            ) : (
                <>
                    <TableCell colSpan={2}>Product Not Available</TableCell>
                </>
            )}
            <TableCell>{formulaires.createdAt}</TableCell>
        </TableRow>
    )
}

export default Ordercomponents
