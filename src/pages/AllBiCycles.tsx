import { ChangeEvent, useState } from "react"
import BiCycleCard from "../components/shared/BiCycleCard"
import { Input } from "../components/ui/input"
import { useGetAllBiCyclesQuery } from "../redux/features/bi-cycles/biCyclesApi"
import { TBiCycle } from "../types/biCycles.types"

const AllBiCycles = () => {
  const {data:allBiCycles, isLoading} = useGetAllBiCyclesQuery(undefined)
  const [bicycles, setBicycles] = useState(allBiCycles)
  const handleSearch = (e:ChangeEvent<HTMLInputElement>) =>{
    setBicycles(allBiCycles.data?.filter((bicycle: TBiCycle) => bicycle.name.trim().split(" ").join("").toLowerCase().includes(e.target.value.trim().split(" ").join("").toLocaleLowerCase()) ))
  }
  if(isLoading){
    return <div className="flex h-screen justify-center items-center" >
      <h1 className="text-2xl">Loading...</h1>
    </div>
  }

  return (
    <div className="pt-36">
      <h1 className="text-3xl text-center font-main" >All Bi-Cycles</h1>
      <div className="flex justify-center mb-4 mt-8 ">
        <Input className="max-w-[20vw] focus:shadow-lg shadow-sm duration-200 outline-none transition-all" placeholder="search..." onChange={handleSearch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-max mx-auto">
        {
          bicycles.map((item: TBiCycle)=> <BiCycleCard key={item._id} biCycle={item} />)
        }
      </div>
    </div>
  )
}

export default AllBiCycles