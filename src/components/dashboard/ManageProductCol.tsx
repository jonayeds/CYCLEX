
import { ColumnDef } from "@tanstack/react-table"
import { TBiCycle } from "../../types/biCycles.types"
import UpdateBicycle from "../shared/UpdateBicycle"
import DeleteBicycle from "../shared/DeleteBicycle"




export const productsColumn: ColumnDef<TBiCycle>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell:({row})=>{
        return <p className="truncate">{row.original.name}</p>
    }
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell:({row})=>{
        return <p>{row.original.brand}</p>
    }
  },
  {
    accessorKey: "type",
    header: "Category",
    cell:({row})=>{
        return <p>{row.original.type}</p>
    }
  },
  {
    accessorKey: "type",
    header: "Quantity",
    cell:({row})=>{
        return <p>{row.original.quantity}</p>
    }
  },
  {
    accessorKey: "type",
    header: "Price",
    cell:({row})=>{
        return <p>{row.original.price}</p>
    }
  },
  {
    accessorKey: "action",
    header: ()=>{
      return <p className="text-center">Action</p>
    },
    cell:({row})=>{
      return <div className="flex items-center justify-center gap-2">
        <UpdateBicycle  productId={row.original._id} />
        <DeleteBicycle productId={row.original._id}/>
      </div>
    }
  },
]






