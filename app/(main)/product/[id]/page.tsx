
import React from 'react'


import axios from 'axios'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DeletButton from '@/components/component/delet-button';
import UpdateProductForm from '@/components/manegeProductForm';
import DeleteButton from '@/components/deleteButton';

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
     
      
        {/* <Link href={`/product/update/${id}`}>
        <Button className='mt-5'>Edit Product <Pencil className="w-4 h-4 ml-2" /></Button>
      
        </Link> */}
        <div className='flex flex-row items-center'>
        <UpdateProductForm data={data?.data} id={id} />
      <DeleteButton id={id} />
        </div>
         
    </div>
  )
}