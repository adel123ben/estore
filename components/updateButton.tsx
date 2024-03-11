import React from 'react'
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { toast } from 'sonner'
import { Pencil } from 'lucide-react';

type Props = {
    id: string,
    title: string,
    price: string,
    image: string
}


function UpdateButton({id, title, price, image}:Props) {
    const handeUpdate = async (e:any) => {
        e.preventDefault()
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
            title:title,
            price:price,
            image:image
        })
        if(res.status === 200){
            window.location.reload()
            toast.success("Product Updated")
        }else{
            console.log(res)
            toast.error("Something went wrong")
        }
    }
  return (
    <div>
        <Button size="lg"  onClick={handeUpdate}>
        <Pencil  />
        </Button>
    </div>
  )
}

export default UpdateButton