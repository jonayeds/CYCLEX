import { useGetAllBiCyclesQuery } from "../../redux/features/bi-cycles/biCyclesApi"
import { TBiCycle } from "../../types/biCycles.types"
import BiCycleCard from "../shared/BiCycleCard"

const FeaturedBiCycles = () => {
	const  {data:allBiCycles, isLoading} = useGetAllBiCyclesQuery([{name:"limit", value:"6"}])
	console.log(allBiCycles)
	if(isLoading){
		return <div className="text-2xl my-8  w-screen flex justify-center">
			LOADING...
		</div>
	}
  return (
    <div className="grid lg:grid-cols-3 mx-auto max-w-max gap-4 mt-8  md:grid-cols-2 grid-cols-1" >
        {
			allBiCycles?.data?.map((item:TBiCycle)=><BiCycleCard key={item._id} biCycle={item} />)
		}
    </div>
  )
}

export default FeaturedBiCycles