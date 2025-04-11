
import { ordersColumn } from "../../../components/dashboard/OrdersCol"
import { DataTable } from "../../../components/shared/DataTable"
import Loading from "../../../components/shared/Loading"
import { useGetAllOrdersQuery } from "../../../redux/features/bi-cycles/biCyclesApi"

const ManageOrders = () => {
    const {data,isLoading } = useGetAllOrdersQuery(undefined)
    const orders = data?.data
    if(isLoading){
        return <Loading/>
    }

  return (
    <div className="mt-12">
        <DataTable data={orders} columns={ordersColumn}/>
    </div>
  )
}

export default ManageOrders