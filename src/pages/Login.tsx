import { useForm } from "react-hook-form"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

const Login = () => {
  const form = useForm({
    defaultValues:{
      email:"",
      password:""
    }
  })
  const onSubmit =(values)=>{
    console.log(values)
    form.reset()
  }
  return (
    <div className="min-h-screen  flex flex-col text-white  items-center justify-center login-background">
      <div className=" flex flex-col text-white  items-center justify-center bg-white bg-opacity-15 backdrop-blur-2xl shadow-2xl p-8 rounded-xl">
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

              <FormMessage />
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