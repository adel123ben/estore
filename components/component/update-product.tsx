"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function Updateproduct() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create product</h1>
      <p className="text-sm mb-6">Add a new product</p>
      <div className="mb-4">
        <Button className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-300 text-gray-700">
          <UploadCloudIcon className="text-gray-500" />
          <span>Upload an Image</span>
        </Button>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Product name" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            Price
          </label>
          <Input id="price" placeholder="0" />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="category">
            Category
          </label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="category1">Category 1</SelectItem>
              <SelectItem value="category2">Category 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="size">
            Size
          </label>
          <Select>
            <SelectTrigger id="size">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="color">
            Color
          </label>
          <Select>
            <SelectTrigger id="color">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Checkbox id="featured" />
          <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="featured">
            Featured
            <span className="text-xs text-gray-500 block">This product will appear on the home page</span>
          </label>
        </div>
        <div className="flex items-center col-span-1 md:col-span-2 lg:col-span-3">
          <Checkbox id="archived" />
          <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="archived">
            Archived
            <span className="text-xs text-gray-500 block">This product will not appear anywhere in the store.</span>
          </label>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <Button className="w-full">Create</Button>
        </div>
      </form>
    </div>
  )
}


function UploadCloudIcon(props: any) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}
