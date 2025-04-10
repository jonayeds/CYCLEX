import { useGetAllUsersQueryQuery } from "../../../redux/features/users/usersApi"

const ManageUsers = () => {
    const {data} = useGetAllUsersQueryQuery(undefined)
    console.log(data)
  return (
    <div>
        
    </div>
  )
}

export default ManageUsers