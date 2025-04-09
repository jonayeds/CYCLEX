import {  NavLink } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const DashboardNavigation = () => {
  return (
    <div className="min-h-screen  px-4">
        <div className="pt-12">
        <h1 className="font-main text-center text-3xl uppercase cursor-pointer tracking-wider md:tracking-[8px]">cyclex</h1>
        <Accordion type="single" collapsible className="mt-8" >
        <AccordionItem value="users">
        <AccordionTrigger className="">Users</AccordionTrigger>
        <AccordionContent className="py-2">
            <NavLink to={"admin/dashboard/users"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Users</span></NavLink>
        </AccordionContent>
      </AccordionItem>
        <AccordionItem value="products">
        <AccordionTrigger className="">Products</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
        <NavLink to={"admin/dashboard/add-product"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Users</span></NavLink>
        <NavLink to={"admin/dashboard/manage-products"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Users</span></NavLink>
        </AccordionContent>
      </AccordionItem>
        <AccordionItem value="Orders">
        <AccordionTrigger className="">Accessories & Apparel</AccordionTrigger>
        <AccordionContent className=" flex flex-col gap-2">
        <NavLink to={"admin/dashboard/manage-orders"} className={'group'}><span className={'group-[.active]:bg-black group-[.active]:text-white px-4 py-1 rounded-lg '}>Manage Orders</span></NavLink>
        </AccordionContent>
      </AccordionItem>
        </Accordion>
        </div>
    </div>
  )
}

export default DashboardNavigation