import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="py-[30px] bg-[#333333]" dir="ltr">
      <div className="container mx-auto max-lg:px-[15px] flex flex-col items-center justify-center">
        <div className="flex items-center gap-5 text-[#6aaf08]">
          <FaFacebookF className="w-[40px] h-[40px] bg-[#444] p-[10px] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#6aaf08] hover:text-white" />
          <BsTwitterX className="w-[40px] h-[40px] bg-[#444] p-[10px] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#6aaf08] hover:text-white" />
          <FaInstagram className="w-[40px] h-[40px] bg-[#444] p-[10px] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#6aaf08] hover:text-white" />
        </div>

        <p className="text-[#666] pt-10">
          &copy; 2024 Landscaper. Designed by{" "}
          <span className="text-[#888] font-medium">Abdelrhman Elsayed</span>
        </p>
      </div>
    </div>
  );
};
