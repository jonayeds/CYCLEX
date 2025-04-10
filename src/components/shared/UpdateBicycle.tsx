import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useGetSingleBicycleQuery, useUpdateBicycleMutation } from "../../redux/features/bi-cycles/biCyclesApi"
import { TBiCycle } from "../../types/biCycles.types"
import { useEffect } from "react"
import { toast } from "sonner"

const BicycleCategories = ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']
const UpdateBicycle = ({productId}:{productId:string}) => {
    const {data} = useGetSingleBicycleQuery(productId)
    const product:TBiCycle = data?.data
    const [updateBiCycle] = useUpdateBicycleMutation()
    const form = useForm({
        defaultValues:{
            name:"",
            price:"",
            brand:"",
            quantity:"",
            description:"",
            type:"",
        }
    })
    useEffect(() => {
        if (product) {
            form.reset({
                name: product.name,
                price: `${product.price}`,
                brand: product.brand,
                quantity:`${product.quantity}`,
                description: product.description,
                type: product.type
            });
        }
    }, [product, form]);
    const handleUpdate:SubmitHandler<FieldValues> = async(data)=>{
        const id = toast.loading("Updating Bi-Cycle")
        console.log(data)
        const res = await updateBiCycle({data:{...data, quantity:Number(data.quantity), price:Number(data.price)}, productId})
        console.log(res)
        if(res?.data){
            toast.success("Product Updated Successfully", {id})
        }else{
            toast.error("Something went wrong", {id})
        }
    }
  return (
    <div>
        <Dialog>
    <DialogTrigger>
        <Button className="bg-green-500 hover:bg-green-700 border-none hover:border-none text-white">Update</Button>
    </DialogTrigger>
    <DialogContent className="bg-white border-none p-6">
        <DialogTitle>Update <span className="text-green-600">{product?.name}</span></DialogTitle>
    <Form {...form} >
                <form onSubmit={form.handleSubmit(handleUpdate)} className="grid md:grid-cols-2 gap-4 grid-cols-1 mt-4">
                <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input   {...field} type="text" />
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
                <Input   {...field} type="number" />
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
                <textarea  {...field} className="min-h-16 max-h-24 border-gray-200 border outline-none rounded-lg p-2 bg-gray-50"></textarea>
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
                <Select onValueChange={field.onChange} >
                <SelectTrigger >
                  <SelectValue placeholder={product.type} />
                </SelectTrigger>
                    <SelectContent  >
                        <SelectGroup>
                            {
                                BicycleCategories.map((bi) =><SelectItem key={bi} value={bi}>{bi}</SelectItem>)
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        /> 
        <DialogClose className="w-full md:col-span-2">
        <Button type="submit" className="md:col-span-2 w-full mt-4 uppercase bg-black hover:bg-white hover:text-black text-white border border-black">Update</Button>
        </DialogClose>
                </form>
            </Form>
    </DialogContent>
        </Dialog>
    </div>

  )
}

export default UpdateBicycle