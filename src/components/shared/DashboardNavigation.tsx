import {  NavLink } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { useAppSelector } from "../../redux/hooks"
import { selectCurrentUser } from "../../redux/features/auth/authSlice"

const DashboardNavigation = () => {
    const user = useAppSelector(selectCurrentUser)
  return (
    <div className="min-h-screen  px-4">
        <div className="pt-12">
        <h1 className="font-main text-center text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</h1>
        {
            user?.role === 'admin'? <Accordion type="single" collapsible className="mt-8" >
            <AccordionItem value="users">
            <AccordionTrigger className="">Users</AccordionTrigger>
            <AccordionContent className="py-2">
                <NavLink to={"/dashnoard/admin/users"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Users</span></NavLink>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="products">
            <AccordionTrigger className="">Products</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 py-2">
            <NavLink to={"/dashboard/admin/add-product"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Users</span></NavLink>
            <NavLink to={"/dashboard/admin/manage-products"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Users</span></NavLink>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="Orders" className="">
            <AccordionTrigger className="">Accessories & Apparel</AccordionTrigger>
            <AccordionContent className=" flex flex-col gap-2 py-2">
            <NavLink to={"/dashboard/admin/manage-orders"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Orders</span></NavLink>
            </AccordionContent>
          </AccordionItem>
            </Accordion> : <div className="flex flex-col gap-4 mt-8">
                <NavLink to={'/dashboard/customer/manage-profile'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Profile</span></NavLink>
                <NavLink to={'/dashboard/customer/My-orders'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>My Orders</span></NavLink>
            </div>
        }
        
        </div>
    </div>
  )
}

export default DashboardNavigation