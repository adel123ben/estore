"use client";
import React, { useState } from 'react'
import { Input } from '../ui/input';
import UpdateButton from './updateButton';
import { Textarea } from "@/components/ui/textarea"


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
    <div>
 <form     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label  className="mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)}    placeholder={data?.title}  id="title" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            Price
          </label>
          <Input  value={price} onChange={(e) => setPrice(e.target.value)}   id="price" placeholder={data?.price} />
        </div>
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
        {/* <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="category">
            Category
          </label>
          <Input disabled  id="category"  />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="size">
            Size
          </label>
          <Input    disabled   id="size"  />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="color">
            Color
          </label>
          <Input disabled  id="color" />
        </div> */}
        {/* <div className="flex items-center">
          <Checkbox id="featured" />
          <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="featured">
            Featured
            <span className="text-xs text-gray-500 block">This product will appear on the home page</span>
          </label>
        </div> */}
        {/* <div className="flex items-center col-span-1 md:col-span-2 lg:col-span-3">
          <Checkbox id="archived" />
          <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="archived">
            Archived
            <span className="text-xs text-gray-500 block">This product will not appear anywhere in the store.</span>
          </label>
        </div> */}
       
       <div className="flex flex-col space-y-6">
       <Textarea  value={benefit} onChange={(e) => setBenefits(e.target.value)}  id="benefit" placeholder={data?.benefit} />
       <Textarea  value={benefit2} onChange={(e) => setBenefits2(e.target.value)}  id="benefit" placeholder={data?.benefit2} />
      <Textarea  value={benefit3} onChange={(e) => setBenefits3(e.target.value)}  id="benefit" placeholder={data?.benefit3} />
      <Textarea  value={benefit4} onChange={(e) => setBenefits4(e.target.value)}  id="benefit" placeholder={data?.benefit4} />
      <Textarea  value={benefit5} onChange={(e) => setBenefits5(e.target.value)}  id="benefit" placeholder={data?.benefit5} />
       </div>
       <div>
       <UpdateButton image2={image2} benefit5={benefit5} benefit4={benefit4} benefit3={benefit3} benefit2={benefit2} benefit={benefit} image={image} title={title} price={price} id={id} />
       </div>
      </form>
    </div>
  )
}

export default UpdateProductForm