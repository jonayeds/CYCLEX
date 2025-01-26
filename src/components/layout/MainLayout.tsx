import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const MainLayout = () => {
  return (
    <div className="">
      <nav className="bg-gray-300 w-screen fixed px-[7vw] lg:px-[4vw] py-[1vh] ">
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
          <DrawerContent className="">
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </nav>
      <div className="min-h-[200vh] pt-10 ">content</div>
    </div>
  );
};

export default MainLayout;
