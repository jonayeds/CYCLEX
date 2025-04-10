
import { ordersColumn } from "../../../components/dashboard/OrdersCol"
import { DataTable } from "../../../components/shared/DataTable"
import { useGetAllOrdersQuery } from "../../../redux/features/bi-cycles/biCyclesApi"

const ManageOrders = () => {
    const {data} = useGetAllOrdersQuery(undefined)
    const orders = data?.data
  return (
    <div className="mt-12">
        <DataTable data={orders} columns={ordersColumn}/>
    </div>
  )
}

export default ManageOrders