"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loginSchema } from "@/lib/validation"
import { Button } from "@/components/ui/button"
import { SubmitButton } from "@/hooks/submitButon"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"


export default function RegisterPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    await signIn("credentials",{
        email:values.email,
        password:values.password,
        redirect:true,
        callbackUrl:callbackUrl ||  "/"
    })
    
  }
  return (
    <>
   
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-64 md:h-72 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="-mt-16 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your dashboard!
          </h2>
        </div>

        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
            <div>
            <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="write your email please" {...field} />
              </FormControl>       
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
            <div>
            <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="enter your password" {...field} type='password' />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
           
            <div>
              <Button
                type="submit"
                className="flex bg-slate-950 w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </Button>
            </div>
          </form>
        </Form>
         

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-slate-900 hover:opacity-75">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  )
}
