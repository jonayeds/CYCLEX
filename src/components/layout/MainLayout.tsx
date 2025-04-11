import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useDispatch } from "react-redux";
import { logOut,  selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { Github, Twitter } from "lucide-react";


const MainLayout = () => {
  const dispatch = useDispatch()
  const user = useAppSelector(selectCurrentUser)
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
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu "
            >
              <line x1="10" x2="35" y1="6" y2="6" />
              <line x1="4" x2="35" y1="12" y2="12" />
              <line x1="16" x2="35" y1="18" y2="18" />
            </svg>
          </DrawerTrigger>
          <DrawerContent >
            <div className="px-4 lg:px-8 font-description text-lg flex flex-col items-start pt-[7vh] gap-y-4 tracking-wider">
            <DrawerTitle>
            <Link to={"/"} className="font-main text-black mx-auto text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</Link>

            </DrawerTitle>
              <hr  className="border-2 border-gray-200 w-full mb-4"/>

            <DrawerDescription className="flex flex-col space-y-4 text-black">
            <NavLink to={"/"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">Home</span></NavLink>
            <NavLink to={"/all-bicycles"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">All Bi-Cycles</span></NavLink>
            <NavLink to={"/about"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">About</span></NavLink>
            {
              user &&  <NavLink to={ user.role === "admin" ? "/dashboard/admin/users": "/dashboard/customer/manage-profile"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">Dashboard</span></NavLink>
            }
           
            </DrawerDescription>
            </div>
          </DrawerContent>
        </Drawer>
        <div>
            <Link to={"/"} className="font-main text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</Link>
        </div>
        {
          !user ? (<div className="flex gap-4 items-center">
            <NavLink to={"/login"}><Button>Login</Button></NavLink>
            <NavLink to={"/register"} className={"hidden md:flex"}><Button variant={"link"}>Register</Button></NavLink>
        </div>): (<div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>)
        }
        
        
      </nav>
      <div className="min-h-[100vh] ">
        <Outlet/>
      </div>
      <div className="bg-[#626161] text-white mt-16 py-10">
        <div className="max-w-[70vw] mx-auto grid md:grid-cols-3 grid-cols-1 gap-y-8" >
        <h1 className="font-main md:text-center text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</h1>
        <div className="flex flex-col md:items-center">
          <div>

          <p className="font-semibold">Legal</p>
          <p className="font-light">Privacy policy</p>
          <p className="font-light">Terms and Conditions</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center ">
          <p className="font-semibold">Follow Us</p>
          <div className="flex items-center gap-3 mt-2">

          <p><Github/></p>
          <p><Twitter/></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
