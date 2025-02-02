/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { toast } from "sonner"
import { varifyToken } from "../utils/varifyToken"
import {  useNavigate } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks"
import { useLoginMutation, useRegisterMutation } from "../redux/features/auth/authApi"
import { IUser, setUser } from "../redux/features/auth/authSlice"


const Register = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation()
  const [login] = useLoginMutation()
  const form = useForm({
    defaultValues:{
      email:"",
      password:"",
      firstName:"",
      middleName:"",
      lastName:"",
    }
  })
  const onSubmit = async(values:FieldValues)=>{
    const toastId = toast.loading("Registering...")
    try {
      const userInfo = {
        email : values.email,
        password:values.password,
        name:{
          firstName:values.firstName,
          middleName:values?.middleName,
          lastName:values.lastName
        }
      }
      console.log(userInfo)
      const registration =  await register(userInfo).unwrap()
      console.log(registration)
      if(registration.success){
        const res = await login({email:values.email, password:values.password}).unwrap()
        const user = varifyToken(res?.data?.accessToken) as IUser
        dispatch(setUser({user, token:res?.data?.accessToken}))
      }
      navigate(`/`)
        toast.success("Registration Successfull", {id:toastId, duration:1000})
      form.reset()
    } catch (error:any) {
      toast.error(error?.data?.message||"Something went wrong", {id:toastId, duration:2000})
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen  flex flex-col text-white  items-center justify-center register-background">
      <div className=" flex flex-col text-white  items-center justify-center bg-white bg-opacity-10 backdrop-blur-2xl shadow-2xl p-8 rounded-xl">
      <h1 className="text-[4vw]  font-main mb-10">Register</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 min-w-[25vw] ">
      <div className="md:flex md:gap-2 ">
      <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input  {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="middleName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Middle Name</FormLabel>
              <FormControl>
                <Input  {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input  {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
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

export default Register