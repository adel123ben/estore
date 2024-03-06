import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function NavbarSheets() {
  return (
    <Sheet>
      <SheetTrigger asChild>
       
        <Menu size={20} />
       
      </SheetTrigger>
      <SheetContent>
      <ul className="flex">
            <li>
              <Link className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="/product">
                Product
              </Link>
            </li>
            <li>
              <a className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="#">
                Colors
              </a>
            </li>
            <li>
              <a className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="#">
                Size
              </a>
            </li>
            <li>
              <a className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="#">
                Banner
              </a>
            </li>
            <li>
              <a className="px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800" href="#">
                Category
              </a>
            </li>
          </ul>
      </SheetContent>
    </Sheet>
  )
}
