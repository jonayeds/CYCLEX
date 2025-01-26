import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";


const MainLayout = () => {
  return (
    <div className="">
      <nav className=" w-screen fixed px-[7vw] lg:px-[4vw] py-[1vh] flex justify-between items-center">
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

            <NavLink to={"/"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">Home</span></NavLink>
            <NavLink to={"/all-bicycles"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">All Bi-Cycles</span></NavLink>
            <NavLink to={"/about"} className={"group"}><span className="group-[.active]:text-xl group-[.active]:font-bold duration-300">About</span></NavLink>
            </div>
          </DrawerContent>
        </Drawer>
        <div>
            <h1 className="font-main text-3xl uppercase cursor-pointer">cyclex</h1>
        </div>
        <div className="flex gap-4 items-center">
            <Button>Login</Button>
            <Button variant={"link"}>Register</Button>
        </div>
      </nav>
      <div className="min-h-[200vh] pt-16 ">
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
