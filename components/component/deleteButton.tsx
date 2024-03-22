"use client";
import React from 'react'
import axios from 'axios'
import { toast } from 'sonner';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Trash, Trash2 } from "lucide-react"

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

    <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button size="icon" variant="destructive"><Trash size={17} className='' /></Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <Button onClick={handelDlete} variant="destructive" >Delete <Trash2 size={20} className='ml-2' /></Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default DeleteButton