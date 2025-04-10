import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Button } from "../../../components/ui/button"
import { toast } from "sonner"
import { useAddBicycleMutation } from "../../../redux/features/bi-cycles/biCyclesApi"
import { useNavigate } from "react-router-dom"


const BicycleCategories = ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']

const AddProduct = () => {
    const [addBicycle,{isLoading}] = useAddBicycleMutation()
    const navigate = useNavigate()
    const form = useForm({
        defaultValues:{
            name:"",
            price:'',
            brand:'',
            quantity:'',
            description:'',
            type:''
        }
    })

    const handleAddProduct: SubmitHandler<FieldValues> = async(data)=>{
        data.price = Number(data.price)
        data.quantity = Number(data.quantity)
        if(!(data.price && data.brand && data.quantity && data.type && data.name )){
            toast.error("All Fields are neeeded")
            return
        }
        if((data.price < 0 ) || (data.quantity<0)){
            toast.error("Price and Quantity cannot be a negative number")
            return 
        }
        if(data.quantity > 0){
            data.inStock = true
        }else data.inStock = false
        console.log(data)
        const res= await addBicycle(data)
        console.log(res)
        if(res?.data){
            toast.success(res.data.message)
            navigate("/")

        }else{
            toast.error("Something went wrong")
        }
    }

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="border border-gray-100 p-8 rounded-xl">
            <h1 className="font-main text-[6vw] md:text-[3vw] text-center">Add Bi-Cycle</h1>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleAddProduct)} className="grid md:grid-cols-2 gap-4 grid-cols-1 mt-12">
                <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input  {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input  {...field} type="number" />
              </FormControl>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input  {...field} type="number" />
              </FormControl>
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 md:col-span-2 ">
              <FormLabel>Description</FormLabel>
              <FormControl>
                {/* <Input  {...field} type="number" /> */}
                <textarea {...field} className="min-h-16 max-h-24 border-gray-200 border outline-none rounded-lg p-2 bg-gray-50"></textarea>
              </FormControl>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2  ">
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input  {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        /> 
          <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2  ">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger >
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            {
                                BicycleCategories.map(bi =><SelectItem key={bi} value={bi}>{bi}</SelectItem>)
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        /> 
        <Button type="submit" className="md:col-span-2 mt-4 uppercase bg-black hover:bg-white hover:text-black text-white border border-black">Add{isLoading && 'ding...'}</Button>
                </form>
            </Form>
        </div>
    </div>
  )
}

export default AddProduct