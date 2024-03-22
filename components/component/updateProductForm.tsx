"use client";
import React, { useState } from 'react'
import { Input } from '../ui/input';
import UpdateButton from './updateButton';
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from '../ui/checkbox';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from '../ui/button';
import { DeleteIcon } from 'lucide-react';


type Props = {
    data:{
        id:string,
        title:string,
        price:string,
        image:string,
        image2:string,
        benefit:string,
        benefit2:string,
        benefit3:string,
        benefit4:string,
        benefit5:string,
    },
    id:string;
}
function UpdateProductForm({data,id}:Props) {
    const [title, setTitle] = useState(data?.title);
    const [price, setPrice] = useState(data?.price);
    const [image, setImage] = useState(data?.image);
    const [image2, setImage2] = useState(data?.image2);
    const [benefit, setBenefits] = useState(data?.benefit);
    const [benefit2, setBenefits2] = useState(data?.benefit2);
    const [benefit3, setBenefits3] = useState(data?.benefit3);
    const [benefit4, setBenefits4] = useState(data?.benefit4);
    const [benefit5, setBenefits5] = useState(data?.benefit5);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* <h1 className="text-2xl font-semibold mb-6">Edit a product.</h1>
      <div className="mb-4">
        <h2 className="font-medium text-lg mb-2">Images</h2>
        <div className="flex space-x-4 mb-2">
          <div className="relative">
            <img
              alt="Product Image 1"
              className="h-24 w-24 object-cover"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <Button className="absolute top-0 right-0" variant="destructive">
              <DeleteIcon className="text-white" />
            </Button>
          </div>
          <div className="relative">
            <img
              alt="Product Image 2"
              className="h-24 w-24 object-cover"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <Button className="absolute top-0 right-0" variant="destructive">
              <DeleteIcon className="text-white" />
            </Button>
          </div>
        </div>
        <Button variant="secondary">Upload an Image</Button>
      </div> */}
      <form>
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="productName">
            Name
          </label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)}    placeholder={data?.title} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="productPrice">
            Price
          </label>
          <Input  value={price} onChange={(e) => setPrice(e.target.value)}   id="price" placeholder={data?.price} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="productCategory">
            Category
          </label>
          <Select>
            <SelectTrigger id="productCategory">
              <SelectValue placeholder="Shirts" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="shirts">Shirts</SelectItem>
              <SelectItem value="pants">Pants</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="productSize">
            Size
          </label>
          <Select>
            <SelectTrigger id="productSize">
              <SelectValue placeholder="Extra Small" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="xs">Extra Small</SelectItem>
              <SelectItem value="s">Small</SelectItem>
              <SelectItem value="m">Medium</SelectItem>
              <SelectItem value="l">Large</SelectItem>
              <SelectItem value="xl">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1" htmlFor="productColor">
            Color
          </label>
          <Select>
            <SelectTrigger id="productColor">
              <SelectValue placeholder="White" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="red">Red</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-start">
          <Checkbox id="featured" />
          <label className="ml-2 flex flex-col" htmlFor="featured">
            <span className="font-medium">on sale</span>
            <span className="text-sm">Mark this product as on sale</span>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            image
          </label>
          <Input   value={image} onChange={(e) => setImage(e.target.value)}  id="image" placeholder={data?.image} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            image2
          </label>
          <Input  value={image2} onChange={(e) => setImage2(e.target.value)}  id="image" placeholder={data?.image} />
        </div>
        <div className="flex items-start">
          <Checkbox id="featured" />
          <label className="ml-2 flex flex-col" htmlFor="featured">
            <span className="font-medium">stoked</span>
            <span className="text-sm">This product will appear on the home page as stoked</span>
          </label>
        </div>
      </div>
      {/* <div className="flex items-start mb-6">
        <Checkbox id="archived" />
        <label className="ml-2 flex flex-col" htmlFor="archived">
          <span className="font-medium">Archived</span>
          <span className="text-sm">This product will not appear anywhere in the store.</span>
        </label>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <div className="flex flex-col space-y-5">
          <label className="font-medium mb-1" htmlFor="productBenefits">
            Benefits
          </label>
          <Textarea  value={benefit} onChange={(e) => setBenefits(e.target.value)}  id="benefit" placeholder={data?.benefit} />
       <Textarea  value={benefit2} onChange={(e) => setBenefits2(e.target.value)}  id="benefit" placeholder={data?.benefit2} />
      <Textarea  value={benefit3} onChange={(e) => setBenefits3(e.target.value)}  id="benefit" placeholder={data?.benefit3} />
      <Textarea  value={benefit4} onChange={(e) => setBenefits4(e.target.value)}  id="benefit" placeholder={data?.benefit4} />
      <Textarea  value={benefit5} onChange={(e) => setBenefits5(e.target.value)}  id="benefit" placeholder={data?.benefit5} />
        </div>
      </div>
      <UpdateButton image2={image2} benefit5={benefit5} benefit4={benefit4} benefit3={benefit3} benefit2={benefit2} benefit={benefit} image={image} title={title} price={price} id={id} />
      </form>
    </div>
   
  )
}

export default UpdateProductForm