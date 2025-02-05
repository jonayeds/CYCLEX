import BiCycleCard from "../components/shared/BiCycleCard"
import { useGetAllBiCyclesQuery } from "../redux/features/bi-cycles/biCyclesApi"
import { TBiCycle } from "../types/biCycles.types"

const AllBiCycles = () => {
  const {data:allBiCycles, isLoading} = useGetAllBiCyclesQuery(undefined)
  if(isLoading){
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  return (
    <div className="pt-36">
      <h1 className="text-3xl text-center " >All Bi-Cycles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-max mx-auto">
        {
          allBiCycles?.data.map((item: TBiCycle)=> <BiCycleCard biCycle={item} />)
        }
      </div>
    </div>
  )
}

export default AllBiCycles