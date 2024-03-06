
import React from 'react'


import axios from 'axios'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DeletButton from '@/components/component/delet-button';

async function getData(id: string) {
  const res = await axios.get(`${process.env.API_URL}/product/${id}`)
  return res.data
}

export default  async function page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{data?.data?.title}</h1>
      <p className="text-sm -mt-4 text-gray-500 mb-6">view the product details here</p>
      <div className='flex flex-col'>
      <h1 className='text-sm font-semibold'>image Product</h1>
      
      </div>

      <div className="mb-4">
      <img className="mb-4 mt-6 h-72 rounded-md" src={data?.data?.image} alt="" />
       {/* <Input placeholder='Enter the url of the image' /> */}
      </div>
      <form     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label  className="mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <Input disabled   placeholder={data?.data?.title}  id="title" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            Price
          </label>
          <Input  disabled  id="price" placeholder={data?.data?.price} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="category">
            Category
          </label>
          <Input disabled  id="category"  placeholder={data?.data?.category.name} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="size">
            Size
          </label>
          <Input    disabled   id="size" placeholder={data?.data?.size.name} />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="color">
            Color
          </label>
          <Input disabled  id="color" placeholder={data?.data?.color.name}/>
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
       
      
      </form>
      
        {/* <Link href={`/product/update/${id}`}>
        <Button className='mt-5'>Edit Product <Pencil className="w-4 h-4 ml-2" /></Button>
      
        </Link> */}
    </div>
  )
}