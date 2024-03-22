import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      this is color
      <Link href="/color/addnew">
      <Button>add new color</Button>
      </Link>
    </div>
  )
}

export default page
