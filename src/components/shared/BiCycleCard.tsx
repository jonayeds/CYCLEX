import { Link } from "react-router-dom"
import { TBiCycle } from "../../types/biCycles.types"
import { Button } from "../ui/button"

const BiCycleCard = ({biCycle}:{biCycle: TBiCycle}) => {
  return (
    <div  className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 flex flex-col justify-between">
				<img src={biCycle?.image || "https://images.othoba.com/images/thumbs/0697590_duranta-steel-21-spd-gravity-plus-26-red-bicycle.webp"
} alt="" className="object-cover object-center w-full rounded-md h-72 " />
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracking-widest uppercas text-black">Price: {biCycle.price}$</span>
					<h2 className="text-xl font-semibold tracking-wide">{biCycle.name}</h2>
				</div>
				<p className="dark:text-gray-800">{biCycle.description.substring(0,50)}{(biCycle.description.length>50 ) && '...'}</p>
				<Link to={`/bicycle-details/${biCycle._id}`}>
				<Button className="mt-2 border border-gray-100">View details</Button>
				</Link>
			</div>
  )
}

export default BiCycleCard