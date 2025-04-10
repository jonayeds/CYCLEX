import { usersColumn } from "../../../components/dashboard/ManageUsersCol"
import { DataTable } from "../../../components/shared/DataTable"
import Loading from "../../../components/shared/Loading"
import { selectCurrentUser } from "../../../redux/features/auth/authSlice"
import { useGetAllUsersQueryQuery } from "../../../redux/features/users/usersApi"
import { useAppSelector } from "../../../redux/hooks"
import { TUser } from "../../../types/users.types"

const ManageUsers = () => {
    const {data, isLoading} = useGetAllUsersQueryQuery(undefined)
    const me = useAppSelector(selectCurrentUser)
    if(isLoading){
        return <Loading/>
    }
    const users = data?.data.filter((user: TUser)=> user.email !== me?.email )
  return (
    <div className="mt-12">
        <DataTable columns={usersColumn} data={users} />
    </div>
  )
}

export default ManageUsers