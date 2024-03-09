import { Dashboardcomponets } from '@/components/component/dashboardcomponets'
import React from 'react'
import axios from 'axios'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

async function getData(query:string | string[] | undefined) {
  
  const res = await axios.get(`${process.env.API_URL}/product?query=${query ? query : ""}`)
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
const data = await getData(query)

 console.log(data)
return  <>
 <Dashboardcomponets data={data} />
</>
}
