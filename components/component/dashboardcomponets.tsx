"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Productcard from "./product-card"
import { SearchComponent } from "./search-input";
import { AddNewProduct } from "./add-new-product-button";
import Link from "next/link";
import { CircleFadingPlus } from "lucide-react";
// import { useSession } from "next-auth/react";

// type Props = {
//   product:{
//     _id:string,
//     image: string,
//     name:string,
//     price: number,
//   }
// }
type  Props = {
  data: any
}
export function Dashboardcomponets({ data }: Props) {

  // const session = useSession();
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="py-4">
        <h1 className="text-2xl font-semibold leading-tight">Products ({data.length}) </h1>
        <p className="text-sm text-gray-600">Manage products for your store</p>
      </div>
      <div className="mb-4 flex justify-between">
        <SearchComponent   />
        {/* <AddNewProduct /> */}
        <Link href='/addnewProduct'>
        
        <Button className="bg-neutral-950">
          <span className="hidden md:flex">Create Product</span> <CircleFadingPlus className="text-white ml-2" />
        </Button>
          </Link> 
        
     
     
      </div>
    {/* ts@ignore
    <div>Welcome, {session.data?.user?.data?.name}</div> */}

    <div className="mt-8 space-y-6 mb-8">
      {Array.isArray(data) && data.map((product: any) => (
        <Productcard  key={product._id} products={product} />
      ))}
    </div>
      
  

    </div>
  )
}


function CircleEllipsisIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  )
}
