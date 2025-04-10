import { productsColumn } from "../../../components/dashboard/ManageProductCol"
import { DataTable } from "../../../components/shared/DataTable"
import Loading from "../../../components/shared/Loading"
import { useGetAllBiCyclesQuery } from "../../../redux/features/bi-cycles/biCyclesApi"

const ManageProducts = () => {
    const {data,isLoading} = useGetAllBiCyclesQuery(undefined)
    const products = data?.data
    console.log(products)
    if(isLoading){
        return <Loading/>
    }
  return (
    <div className="mt-12">
        <DataTable columns={productsColumn} data={products}/>
    </div>
  )
}

export default ManageProducts