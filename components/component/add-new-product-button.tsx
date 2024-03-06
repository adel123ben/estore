"use client"

import { Button } from "@/components/ui/button"
import { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import { ClipboardPlus } from "lucide-react";
import { Toaster, toast } from 'sonner'

export function AddNewProduct() {
    const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
 


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/createProduct`, {
        title,
        image,
        category,
        price,
        color,
        size
      });
      console.log(response.data);
      setCategory('');
      setPrice('');
      setColor('');
      setSize('');
      setTitle('');
      setImage('');

      // Cela pourrait être un message de succès ou les données de l'utilisateur nouvellement enregistré
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button size="default" className="ml-4"><ClipboardPlus className="mr-2 h-5 w-5" /> Add New</Button>
      </DialogTrigger>
      <DialogContent   className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Make sure everything is filled out properly
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              name 
            </Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)}   className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
              image
            </Label>
            <Input  id="image" value={image} onChange={(e) => setImage(e.target.value)}  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              size
            </Label>
            <Input id="size" value={size} onChange={(e) => setSize(e.target.value)}  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              category
            </Label>
            <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)}  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              color
            </Label>
            <Input id="color" value={color} onChange={(e) => setColor(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              price
            </Label>
            <Input id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button  onClick={() => toast.success('Product added successfully')} type="submit">Add Product</Button>
        </DialogFooter>
        </form>
      
      
      </DialogContent>
    </Dialog>
  )
}
