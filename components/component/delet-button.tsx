"use client";

import React from 'react'




export default function DeletButton({id}:{id:number}) {
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
          method: "DELETE",
        })
    }
    return(
        <button className="text-red-500 hover:text-red-400" onClick={handleDelete}>Delete</button>
    )
}


 