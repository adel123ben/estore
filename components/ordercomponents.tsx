"use client";
import React, { useState } from 'react'
import { TableRow, TableCell } from "@/components/ui/table"
import axios from 'axios';
import ChekboxItem from './chekboxItem';
import { cn } from '@/lib/utils';

type Props = {
    formulaires: {
        _id: string,
        name: string,
        createdAt: string,
        phone: number,
        wilaya: string,
        isMarked: boolean,
        commune: string,
        quntity: number,
        product: {
            title: string,
            price: number
        },
    }
}

function Ordercomponents({ formulaires }: Props) {
    const [isMarked, setIsChecked] = useState<boolean>(formulaires.isMarked);
    return (
        <TableRow className={cn("hover:bg-muted", isMarked && "line-through")}>
            <TableCell className="font-medium hidden md:flex">
                <ChekboxItem  formulaires={formulaires}/>
            </TableCell>
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
