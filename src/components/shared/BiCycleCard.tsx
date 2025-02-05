import { TBiCycle } from "../../types/biCycles.types"

const BiCycleCard = ({biCycle}:{biCycle: TBiCycle}) => {
  return (
    <div  className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 ">
				<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 " />
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracking-widest uppercas text-black">Price: {biCycle.price}$</span>
					<h2 className="text-xl font-semibold tracking-wide">{biCycle.name}</h2>
				</div>
				<p className="dark:text-gray-800">{biCycle.description}</p>
			</div>
  )
}

export default BiCycleCard