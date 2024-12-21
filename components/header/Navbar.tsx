import { LanguageSwitcher } from "./LanguageSwitcher";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Links } from "./links";

export const Navbar = () => {
  return (
    <nav className="h-[78px] max-md:h-[60px] flex items-center fixed w-full left-0 z-10 max-lg:px-[15px]">
      <div className="flex justify-between items-center container mx-auto max-md:px-[15px]">
        <h2 className="font-bold text-[26px] text-[#eee]">Landscape</h2>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-5 items-center text-base text-[#ddd] max-md:hidden">
            <Links />
          </ul>
          <div className="flex items-center">
            <LanguageSwitcher />
            <span className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="sheet">
                    <FaBars className="text-white text-[20px] cursor-pointer" />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <ul className="flex flex-col items-center justify-center gap-8 pt-10">
                      <Links />
                    </ul>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
