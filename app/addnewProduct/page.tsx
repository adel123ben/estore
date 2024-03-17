"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"

export default function AddNewProduct() {
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

    const [image2, setImage2] = useState('');
   
  
  
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
          benefit5,
          image2
        });
        console.log(response.data);
        setCategory('');
        setPrice('');
        setColor('');
        setSize('');
        setTitle('');
        setImage('');
        setImage2('');
        toast.success('Product created successfully!');
        // Cela pourrait être un message de succès ou les données de l'utilisateur nouvellement enregistré
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement :', error);
        toast.error('Failed to create product!');
      }
    };
  return (
    <main className="mx-auto max-w-screen-lg p-6">
      <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
        <div className="text-center">New Product</div>  
        <div className="text-sm text-gray-500 text-center">Fill in the information below.</div>
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="title">
              Title
            </label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Enter the title" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="price">
              Price
            </label>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} id="price" placeholder="Enter the price" required type="number" />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="color">
              Color
            </label>
            <Input value={color} onChange={(e) => setColor(e.target.value)} id="color" placeholder="Enter the color" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="size">
              Size
            </label>
            <Input value={size} onChange={(e) => setSize(e.target.value)} id="size" placeholder="Enter the size" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="category">
              Category
            </label>
            <Input value={category} onChange={(e) => setCategory(e.target.value)} id="category" placeholder="Enter the category" required />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="images">
              Images
            </label>
            <Input value={image} onChange={(e) => setImage(e.target.value)} id="images" multiple required type="text" />
            {/* <div>You can select multiple images by holding down the Ctrl key (Windows) or the Command key (Mac).</div> */}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="images">
              Images 2
            </label>
            <Input value={image2} onChange={(e) => setImage2(e.target.value)} id="images2" multiple required type="text" />
            {/* <div>You can select multiple images by holding down the Ctrl key (Windows) or the Command key (Mac).</div> */}
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label className="text-sm font-medium leading-5" htmlFor="advantages">
              Advantages
            </label>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Textarea value={benefit} onChange={(e) => setBenefits(e.target.value)} id="advantage1" placeholder="Advantage 1" required />
              </div>
              <div>
                <Textarea value={benefit2} onChange={(e) => setBenefits2(e.target.value)} id="advantage2" placeholder="Advantage 2" required />
              </div>
              <div>
                <Textarea value={benefit3} onChange={(e) => setBenefits3(e.target.value)} id="advantage3" placeholder="Advantage 3" required />
              </div>
              <div>
                <Textarea value={benefit4} onChange={(e) => setBenefits4(e.target.value)} id="advantage4" placeholder="Advantage 4" required />
              </div>
              <div>
                <Textarea value={benefit5} onChange={(e) => setBenefits5(e.target.value)} id="advantage5" placeholder="Advantage 5" required />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button type="submit">Save</Button>
          <Link href="/product" className="ml-2">
          <Button className="ml-2" >
            Cancel
          </Button>
          </Link>
         
        </div>
        </form>
       
      </section>
    </main>
  )
}

