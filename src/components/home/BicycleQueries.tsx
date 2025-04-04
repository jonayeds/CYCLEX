import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const BicycleQueries = () => {
  return (
    <div className="max-w-[50vw] mx-auto">
    <h1 className="font-main md:text-[4vw] font-bold text-[6vw] text-center md:mt-24 mt-16">Customer Queries</h1>
        <Accordion type="single" collapsible className="mt-8" >
        <AccordionItem value="item-1">
        <AccordionTrigger className="">Services & Repairs</AccordionTrigger>
        <AccordionContent>
        Keep your ride in top shape with our expert services. Our certified technicians provide tune-ups, repairs, and custom adjustments to ensure your bike performs at its best. Whether you need a quick fix or a full service, we offer competitive pricing and a satisfaction guarantee. Book an appointment or drop by our service center to experience hassle-free maintenance.
        </AccordionContent>
      </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="">Community & Events</AccordionTrigger>
        <AccordionContent>
        Join our vibrant cycling community! We regularly host group rides, safety workshops, and local events that bring cyclists together. Whether you’re looking to meet new riders or improve your skills, our events are designed to inspire and connect. Check our events calendar for upcoming rides and join us on the road.
        </AccordionContent>
      </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="">Accessories & Apparel</AccordionTrigger>
        <AccordionContent>
        Enhance your cycling experience with our curated selection of accessories and apparel. From helmets, lights, and locks to performance gear and stylish cycling clothing, we’ve got you covered. Each product is chosen for its quality and functionality, ensuring you ride safely and comfortably. Browse our range to gear up for your next ride.
        </AccordionContent>
      </AccordionItem>
        </Accordion>
    </div>
  )
}

export default BicycleQueries