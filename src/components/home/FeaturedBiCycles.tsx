import { useGetAllBiCyclesQuery } from "../../redux/features/bi-cycles/biCyclesApi"
import { TBiCycle } from "../../types/biCycles.types"

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
			allBiCycles?.data?.map((item:TBiCycle)=><div key={item._id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 ">
				<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 " />
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracking-widest uppercas text-black">Price : {item.price}</span>
					<h2 className="text-xl font-semibold tracking-wide">{item.name}</h2>
				</div>
				<p className="dark:text-gray-800">{item.description}</p>
			</div>)
		}
    </div>
  )
}

export default FeaturedBiCycles