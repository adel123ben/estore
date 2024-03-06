
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"
import {signOut} from "next-auth/react" 
import {useSession} from 'next-auth/react'

export default function NavBarDropdown() {
    const session = useSession()
  return (
   
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className=""
            size="icon"
            variant="ghost"
          >
            <img  src="https://github.com/shadcn.png" className="h-8 rounded-full" alt="" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="mt-2 w-48">
          {session && session.status==="authenticated" ? <>
          <DropdownMenuItem>
          <Link href="/profile"> My Account</Link>
           </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span  onClick={()=>signOut()}>Logout</span>
            </DropdownMenuItem></>: <DropdownMenuItem>
            <Link href="/authentication/login">Login</Link>
            </DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}