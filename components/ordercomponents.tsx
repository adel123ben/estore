"use client";

import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { BellIcon, HomeIcon, LineChartIcon, MoreHorizontalIcon, Package2Icon, PackageIcon, PlusIcon, ShoppingCartIcon, UsersIcon } from "lucide-react"

type Props = {
    formulaires:{
        _id:string,
        name:string,
        createdAt: string,
        phone: number,
        wilaya:string,
        commune:string,
        quntity: number,
        product:{
            title:string,
            price:number
        },
    }
}
function Ordercomponents({formulaires}:Props) {
  return (
   <>
   <TableRow>
   <TableCell className="font-medium">e-store</TableCell>
                  <TableCell>{formulaires.name}</TableCell>
                  <TableCell>{formulaires.phone}</TableCell>
                  <TableCell className='text-center' >{formulaires.quntity}</TableCell>
                  <TableCell >{formulaires.wilaya}</TableCell>
                  <TableCell >{formulaires.commune}</TableCell>
                  <TableCell >{formulaires.product.title}</TableCell>
                  <TableCell >{formulaires.product.price}$</TableCell>
                  <TableCell>{formulaires.createdAt}</TableCell>
   </TableRow>
                  
                  
   </>
        
       
                
   
  )
}

export default Ordercomponents
