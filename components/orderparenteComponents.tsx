"use client";

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { BellIcon, HomeIcon, LineChartIcon, MoreHorizontalIcon, Package2Icon, PackageIcon, PlusIcon, ShoppingCartIcon, UsersIcon } from "lucide-react"
import Ordercomponents from './ordercomponents';
type  Props = {
    data: any
  }
function OrderparenteComponents({data}: Props) {
  return (
    
     
      
      <Table className='mt-7'>
      <TableHeader>
                <TableRow>
                  <TableHead >Order ({data.length})</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead >Phone</TableHead>
                  <TableHead>quntity</TableHead>
                  <TableHead >Wilaya</TableHead>
                  <TableHead >commune</TableHead>
                  <TableHead >product</TableHead>
                  <TableHead >Total</TableHead>
                  <TableHead >Order Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody >
                
                    
                    {Array.isArray(data) && data.map((formulaire: any) => (
                       <>
                      
                      <Ordercomponents   key={formulaire._id} formulaires={formulaire} />
                      
                       
                       
                       
                       </>
        
      ))}
                  
              

     
               
              </TableBody>
      </Table>

   
  )
}

export default OrderparenteComponents
