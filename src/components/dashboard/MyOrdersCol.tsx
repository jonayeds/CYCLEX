
import { ColumnDef } from "@tanstack/react-table"
import { TOrder } from "../../types/orders.types"
import CancelOrder from "../shared/CancelOrder"




export const myOrdersColumn: ColumnDef<TOrder>[] = [
  {
    accessorKey: "name",
    header: "Product",
    cell:({row})=>{
        return <p className="truncate">{row.original.product.name}</p>
    }
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell:({row})=>{
        return <p className="truncate">{row.original.product.brand}</p>
    }
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell:({row})=>{
        return <p>{row.original.quantity}</p>
    }
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell:({row})=>{
        return <p>{row.original.totalPrice}</p>
    }
  },
  {
    accessorKey: "payment",
    header: ()=>{
      return <p className="text-center">Payment</p>
    },
    cell:({row})=>{
      return <div className="flex justify-center">
        <p className={`${row.original.paymentSession === "pending" ? 'bg-yellow-200 px-3': 'bg-green-200 px-6' }  py-1 rounded-lg flex justify-center max-w-max`}>{row.original.paymentSession === "pending" ? 'Pending': 'Paid'}</p>
      </div>
    }
  },
  {
    accessorKey: "action",
    header: ()=>{
      return <p className="text-center">Action</p>
    },
    cell:({row})=>{
      return <div className="flex justify-center">
        {/* <p className={`${row.original.paymentSession === "pending" ? 'bg-yellow-200 px-3': 'bg-green-200 px-6' }  py-1 rounded-lg flex justify-center max-w-max`}>{row.original.paymentSession === "pending" ? 'Pending': 'Paid'}</p> */}
        <CancelOrder isPending={row.original.paymentSession === "pending"} orderId={row.original._id}/>
      </div>
    }
  },
]






