/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { toast } from "sonner"
import { varifyToken } from "../utils/varifyToken"
import {  useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks"
import { useLoginMutation } from "../redux/features/auth/authApi"
import { IAuthUser, setUser } from "../redux/features/auth/authSlice"


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation()
  const form = useForm({
    defaultValues:{
      email:"",
      password:""
    }
  })
  const onSubmit = async(values:FieldValues)=>{
    const toastId = toast.loading("Logging in...")
    try {
      const userInfo = {
        email : values.email,
        password:values.password
      }
      const res = await login(userInfo).unwrap()
      console.log(res)
      const user = varifyToken(res?.data?.accessToken) as IAuthUser
      dispatch(setUser({user, token:res?.data?.accessToken}))
      navigate(`/`)
        toast.success("Logged in", {id:toastId, duration:1000})
      form.reset()
    } catch (error:any) {
      toast.error(error?.data?.message||"Something went wrong", {id:toastId, duration:2000})
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen  flex flex-col text-white  items-center justify-center login-background">
      <div className=" flex flex-col text-white  items-center justify-center bg-white bg-opacity-10 backdrop-blur-2xl shadow-2xl p-8 rounded-xl">
      <h1 className="text-[4vw]  font-main mb-10">Login</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 min-w-[25vw] ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input  {...field} type="password" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-center">

        <Button type="submit"  >Submit</Button>
        </div>
      </form>
    </Form>
      </div>
    </div>
  )
}

export default Login