import { toast } from "sonner"
import { useToggleBlockUserMutation } from "../../redux/features/users/usersApi"
import { Button } from "../ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const BlockUser = ({userId, blocked}:{userId:string, blocked:boolean}) => {
    const [isBlocked, setIsBLocked] = useState(blocked)
    const [toggleBlock, {isLoading}] = useToggleBlockUserMutation()
    const blockUser = async()=>{
      const res = await toggleBlock(userId)
      console.log(res)
      if(res?.data){
        setIsBLocked((prev)=>!prev)
        toast.success(`Successfully ${isBlocked? 'Unblocked':'Blocked' } user`)
      }
    }
      return <div className="w-full min-w-24 flex justify-center">
        <Button onClick={blockUser} className={ `${isBlocked ? 'bg-green-500  hover:bg-green-700 ': 'bg-red-500  hover:bg-red-700 '}  hover:border-none border-none  text-white`}>
            {
                isLoading? <Loader2 className="animate-spin duration-500 transition-all" />: isBlocked? 'Unblock': 'Block'
            }
            </Button>
      </div>
}

export default BlockUser