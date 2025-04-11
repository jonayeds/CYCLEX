import { useState } from "react"
import Loading from "../../../components/shared/Loading"
import { Button } from "../../../components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import { Input } from "../../../components/ui/input"
import { useGetCurrentUserQuery, useUpdatePasswordMutation } from "../../../redux/features/users/usersApi"
import { TUser } from "../../../types/users.types"
import { toast } from "sonner"

const ManageProfile = () => {
    const {data, isLoading} = useGetCurrentUserQuery(undefined)
    const user:TUser = data?.data
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [update] = useUpdatePasswordMutation()
    if(isLoading){
        return <Loading/>
    }
    const updatePassword =async()=>{
        const id =toast.loading("Updating Password")
        const res=  await update({oldPassword:oldPass, newPassword:newPass})
        console.log(res)
        if(res?.data){
            toast.success(res.data.message, {id})
        }else{
            toast.error("Old Password not matched", {id})
        }
    }
  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center flex-col gap-4">
        <h1 className="uppercase tracking-widest text-xl">my Profile</h1>
        <div className="p-10 border border-gray-300 rounded-lg">
            <p className="text-gray-800 text-3xl text-center capitalize">{user.name.firstName} {user.name.middleName} {user.name.lastName}</p>
            <p className="text-center my-4 text-sm">{user?.email}</p>
            <Dialog>

            <DialogTrigger asChild className="flex justify-center w-full">

            <Button className=" border-black">Update Password</Button>
            </DialogTrigger>
            <DialogContent className="bg-white border-none max-w-[90vw] md:max-w-md">
                <DialogTitle>Update password</DialogTitle>
                <DialogDescription/>
                <Input onChange={(e)=>setOldPass(e.target.value)} placeholder="Old password" type="password"/>
                <Input onChange={(e)=>setNewPass(e.target.value)} placeholder="New password" type="password"/>
                <DialogClose asChild className="">

                <Button onClick={updatePassword} className="border border-black max-w-max mx-auto">Update</Button>
                </DialogClose>
            </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default ManageProfile