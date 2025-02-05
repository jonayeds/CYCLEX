import { Link } from "react-router-dom"
import FeaturedBiCycles from "../components/home/FeaturedBiCycles"
import { Button } from "../components/ui/button"

const Home = () => {
  return (
    <div className="">
        <div className="h-screen overflow-hidden relative w-screen z-30 hero-background " >
          <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>
            <h1 className="absolute top-[20vh] text-[4vw] text-white  font-main font-bold z-40 text-center   transform translate-x-1/3">Find Your Perfect Ride <br /> Unleash the Joy of Cycling!</h1>
        </div>
        <div>
          <h1 className="font-main md:text-[4vw] font-bold text-[6vw] text-center md:mt-24 mt-16">Featured Bi-Cycles</h1>
         <FeaturedBiCycles/>
         <div>
          
         </div>
          <Link to={"/all-bicycles"}><Button variant={"light"} className=" mx-auto flex mt-8">View All</Button></Link>
        </div>
    </div>
  )
}

export default Home