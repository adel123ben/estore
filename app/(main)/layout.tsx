import NavbarItem from '@/components/navbarItem'
import React from 'react'


interface layoutProps {
    children: React.ReactNode
}
function layout({children}: layoutProps) {
  return (
    <div>
      <NavbarItem />
      {children}
    </div>
  )
}

export default layout

