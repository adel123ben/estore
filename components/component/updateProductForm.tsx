"use client";
import React, { useState } from 'react'
import { Input } from '../ui/input';
import UpdateButton from './updateButton';


type Props = {
    data:{
        id:string,
        title:string,
        price:string,
        image:string
    },
    id:string;
}
function UpdateProductForm({data,id}:Props) {
    const [title, setTitle] = useState(data?.title);
    const [price, setPrice] = useState(data?.price);
    const [image, setImage] = useState(data?.image);
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
          <Input  value={image} onChange={(e) => setImage(e.target.value)}  id="image" placeholder={data?.image} />
        </div>
        <div className="flex flex-col">
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
        </div>
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
       
      <UpdateButton image={image} title={title} price={price} id={id} />
      </form>
    </div>
  )
}

export default UpdateProductForm