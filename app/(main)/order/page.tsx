import { Dashboardcomponets } from '@/components/component/dashboardcomponets'
import React from 'react'
import axios from 'axios'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import OrderparenteComponents from '@/components/orderparenteComponents'

async function getData() {
  
  const res = await axios.get(`${process.env.API_URL}/formulaire`)
  return res.data
 
}

export default async function page({
  params,
  searchParams,
}: {
  params: { query: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
const query=searchParams?.query
console.log(query)
const data = await getData()

 console.log(data)
return  <>
 <OrderparenteComponents data={data} />
</>
}