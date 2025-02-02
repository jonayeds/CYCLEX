import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import { useDispatch } from "react-redux";
import { logOut, selectCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";


const MainLayout = () => {
  const dispatch = useDispatch()
  const token = useAppSelector(selectCurrentToken)
  const handleLogout = ()=>{
    dispatch(logOut())
  }
  return (
    <div className="">
      <nav className=" w-screen z-50 fixed px-[7vw] lg:px-[4vw] py-[2vh] flex justify-between items-center bg-nav text-white ">
        <Drawer direction="left">
          <DrawerTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu "
            >
              <line x1="10" x2="35" y1="6" y2="6" />
              <line x1="4" x2="35" y1="12" y2="12" />
              <line x1="16" x2="35" y1="18" y2="18" />
            </svg>
          </DrawerTrigger>
          <DrawerContent >
            <div className="px-4 lg:px-8 font-description text-lg flex flex-col items-start pt-[7vh] gap-y-4 tracking-wider">
            <h1 className="font-main text-black mx-auto text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</h1>
              <hr  className="border-2 border-gray-200 w-full mb-4"/>

            <NavLink to={"/"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">Home</span></NavLink>
            <NavLink to={"/all-bicycles"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">All Bi-Cycles</span></NavLink>
            <NavLink to={"/about"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">About</span></NavLink>
            </div>
          </DrawerContent>
        </Drawer>
        <div>
            <h1 className="font-main text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</h1>
        </div>
        {
          !token ? (<div className="flex gap-4 items-center">
            <NavLink to={"/login"}><Button>Login</Button></NavLink>
            <NavLink to={"/register"} className={"hidden md:flex"}><Button variant={"link"}>Register</Button></NavLink>
        </div>): (<div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>)
        }
        
        
      </nav>
      <div className="min-h-[200vh] ">
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
