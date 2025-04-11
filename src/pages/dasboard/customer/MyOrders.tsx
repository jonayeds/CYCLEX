import { useGetMyOrdersQuery } from "../../../redux/features/users/usersApi"
import Loading from "../../../components/shared/Loading"
import { DataTable } from "../../../components/shared/DataTable"
import { myOrdersColumn } from "../../../components/dashboard/MyOrdersCol"

const MyOrders = () => {
  const {data, isLoading} = useGetMyOrdersQuery(undefined)
  
  if(isLoading){
    return <Loading/>
  }
  const orders = data?.data
  return (
    <div>
      <DataTable data={orders} columns={myOrdersColumn}/>
    </div>
  )
}

export default MyOrders