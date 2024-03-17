"use client"

import { Button } from "@/components/ui/button"
import { useState } from 'react';
import axios from 'axios';
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
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
  const [benefit, setBenefits] = useState('');
  const [benefit2, setBenefits2] = useState('');
  const [benefit3, setBenefits3] = useState('');
  const [benefit4, setBenefits4] = useState('');
  const [benefit5, setBenefits5] = useState('');

 


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/createProduct`, {
        title,
        image,
        category,
        price,
        color,
        size,
        benefit,
        benefit2,
        benefit3,
        benefit4,
        benefit5
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
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="flex flex-col gap-4">
        <div>New Product</div>
        <div className="text-sm text-gray-500">Fill in the information below.</div>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="title">
              Title
            </label>
            <Input id="title" placeholder="Enter the title" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="price">
              Price
            </label>
            <Input id="price" placeholder="Enter the price" required type="number" />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="color">
              Color
            </label>
            <Input id="color" placeholder="Enter the color" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="size">
              Size
            </label>
            <Input id="size" placeholder="Enter the size" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="category">
              Category
            </label>
            <Input id="category" placeholder="Enter the category" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="images">
              Images
            </label>
            <Input id="images" multiple required type="file" />
            <div>You can select multiple images by holding down the Ctrl key (Windows) or the Command key (Mac).</div>
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="advantages">
              Advantages
            </label>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Textarea id="advantage1" placeholder="Advantage 1" required />
              </div>
              <div>
                <Textarea id="advantage2" placeholder="Advantage 2" required />
              </div>
              <div>
                <Textarea id="advantage3" placeholder="Advantage 3" required />
              </div>
              <div>
                <Textarea id="advantage4" placeholder="Advantage 4" required />
              </div>
              <div>
                <Textarea id="advantage5" placeholder="Advantage 5" required />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button >Save</Button>
        <Button className="ml-2" >
          Cancel
        </Button>
      </CardFooter>
    </Card>
    
    </DialogContent>
  </Dialog>
  )
}
