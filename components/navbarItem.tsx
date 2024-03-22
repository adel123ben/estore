import { Store, Truck } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import NavBarDropdown from "./navbarDropDownMenue"
import { NavbarSheets } from "./navbar-shets"
import Link from "next/link"

export default function NavbarItem() {
    return (
      <nav className="bg-white border-b border-gray-200 lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-2">
        <div className="flex items-center justify-between px-4 py-2 lg:px-0 lg:py-0">
            
            <div className="flex flex-row items-center">
          <Store className="cursor-pointer" size={17} />
            <Link  href="/" className="text-sm font-semibold ml-1 text-gray-700 hover:text-gray-800" >
             e-store
            </Link>
            
          </div>
            
          
          <div className="lg:hidden">
            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
              <NavbarSheets />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex">
            <li>
              <Link className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="/product">
                Product
              </Link>
            </li>
            <li>
              <Link className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="/color">
                Colors
              </Link>
            </li>
            <li>
              <a className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="#">
                Size
              </a>
            </li>
            <li>
              <a className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="#">
              Category
              </a>
            </li>
            <li>
              <Link href="/order">
              <p className="px-2 py-1 flex flex-row items-center text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" >
                Order <Truck size={17} className="ml-1" />
              </p>
              </Link>
            
            </li>
          </ul>
        </div>
        <div className="hidden lg:block  ">
     <NavBarDropdown />
        
        </div>
      </nav>
    )
  }
  
  function MenuIcon(props: any) {
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function SunIcon(props: any) {
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
  }
  