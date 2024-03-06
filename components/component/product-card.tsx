"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "../ui/badge"
import { CircleEllipsisIcon } from "lucide-react"
import Link from "next/link"

type Props = {
    products:{
        _id:string,
        title:string,
        price: number,
        category:{
            name:string
        },
        color:{
            name:string
        },
        size:{
            name:string
        }
    }
}
export default function Productcard({products}:Props) {
  return (
    <div>
    <div>
      <div className="grid gap-6">
        <Card>
          <CardContent className="grid gap-2">
            <h3 className="text-lg font-medium mt-2">{products.title}</h3>
            <p className="text-sm text-gray-500">{products.price}$</p>
            <div className="flex flex-row items-center space-x-5">
            <p className="text-sm text-gray-500">{products.category.name}</p>
            <p className="text-sm text-gray-500">{products.color.name}</p>
            <p className="text-sm text-gray-500">{products.size.name}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/product/${products._id}`}>
            <Button size="sm">View Product</Button>
            </Link>
           
          </CardFooter>
        </Card>
        
      </div>
    </div>
  </div>
  )
}



