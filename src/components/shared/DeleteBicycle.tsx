import { toast } from "sonner"
import { useDeleteBicycleMutation } from "../../redux/features/bi-cycles/biCyclesApi"
import { Button } from "../ui/button"

const DeleteBicycle = ({productId}:{productId:string}) => {
    const [deleteBicycle] = useDeleteBicycleMutation()
    const handleDelete = async()=>{
        const id = toast.loading("Deleting Bi-Cycle")
        const res = await deleteBicycle(productId)
        if(res?.data){
            toast.success(res.data?.message, {id})
        }else{
            toast.error("Something went wrong", {id})
        }
    }
  return (
    <Button onClick={handleDelete} className="bg-red-500 text-white hover:bg-red-700 border-none">Delete</Button>
  )
}

export default DeleteBicycle