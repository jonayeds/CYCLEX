import { Outlet } from "react-router-dom"
import AdminDashboard from "../components/dashboard/AdminDashboard"
import CustomerDashboard from "../components/dashboard/CustomerDashboard"
import DashboardNavigation from "../components/shared/DashboardNavigation"
import { DialogTitle } from "../components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger } from "../components/ui/drawer"
import { selectCurrentUser } from "../redux/features/auth/authSlice"
import { useAppSelector } from "../redux/hooks"

const DashboardMain = () => {
    
  return (
    <div className="pt-[7vh]">
      <Drawer direction="left" >
        <DrawerTrigger className="absolute top-5 left-10">
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
        <DrawerContent className="md:w-[25vw] w-[60vw]">
          <DialogTitle></DialogTitle>
        <DashboardNavigation/>

        </DrawerContent>
      </Drawer>
      <div className="container mx-auto px-4">

      <Outlet/>
      </div>
    </div>
  )
}


export const Dashboard = ()=>{
  const user = useAppSelector(selectCurrentUser)
  return (
    <>
    {
      user?.role ==="customer"? <CustomerDashboard/>:<AdminDashboard/>
    }
    </>
  )
}

export default DashboardMain