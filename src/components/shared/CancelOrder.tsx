import { toast } from "sonner"
import { useDeleteOrderMutation } from "../../redux/features/users/usersApi"
import { Button } from "../ui/button"

const CancelOrder = ({orderId,isPending}:{orderId:string, isPending:boolean}) => {
    const [cancel] = useDeleteOrderMutation()
    const cancelOrder = async()=>{
        const id = toast.loading("Canceling Order...")
        const res=await cancel(orderId)
        if(res?.data){
            toast.success("Order Cancelled", {id})
        }else{
            toast.error("Could not Cancel Order", {id})
        }
    }
  return (
    <div>
     {
        isPending ? <Button onClick={cancelOrder} className="bg-red-500 text-white hover:bg-red-700 border-none">Cancel</Button> : <p className="bg-gray-600 text-white px-4 py-1 rounded-md">Confirmed</p>
     }
        
    </div>
  )
}

export default CancelOrder