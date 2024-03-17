import React from 'react'
import { Button } from '../ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { Pencil } from 'lucide-react'

type Props = {
    id: string,
    title: string,
    price: string,
    image: string,
    image2: string,
    benefit: string,
    benefit2: string,
    benefit3: string,
    benefit4: string,
    benefit5: string
}


function UpdateButton({id, title, price, image, image2, benefit, benefit2, benefit3, benefit4, benefit5}:Props) {
    const handeUpdate = async (e:any) => {
        e.preventDefault()
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
            title:title,
            price:price,
            image:image,
            image2:image2,
            benefit:benefit,
            benefit2:benefit2,
            benefit3:benefit3,
            benefit4:benefit4,
            benefit5:benefit5
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
        <Button onClick={handeUpdate}>Update  <Pencil size={20} className='ml-2' /></Button>
    </div>
  )
}

export default UpdateButton
