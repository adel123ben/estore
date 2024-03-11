"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { toast } from 'sonner';
import { Trash2 } from 'lucide-react';

type Props = {
    id:string
}

function DeleteButton({id}:Props) {
    const handelDlete = async (e:any) => {
        const res = axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`)
        if((await res).status === 200){
            window.location.href="/product"
            toast.success("Product Deleted")
        }else{
            console.log(res)
        }
    }
    
  return (
    <div>
     <Button onClick={handelDlete} variant="destructive" size="lg" >
     <Trash2 />
     </Button>
    </div>
  )
}

export default DeleteButton