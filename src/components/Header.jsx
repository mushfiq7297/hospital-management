import { FaPhone, FaWhatsapp } from "react-icons/fa";

import logo from "/src/assets/Hospital_LOGO.png";
import { HiOutlineMail } from "react-icons/hi";
import { PiLineVerticalLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-50 ">
    <div className="mx-auto max-w-6xl my-2 text-sm">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="h-24 w-24" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-1">
            <p className="hover:text-red-500 font-semibold ">+880 1234567890</p>
            <PiLineVerticalLight />
            <FaPhone
              className="
                  hover:text-red-600 font-semibold text-blue-600"
            />
            <PiLineVerticalLight />
            <HiOutlineMail className="hover:text-red-500 font-semibold text-blue-600" />
            <PiLineVerticalLight />
            <FaWhatsapp className="hover:text-red-500 font-semibold text-blue-600" />
          </div>
          <div className="flex font-semibold gap-2">
            <h1 className="p-2 hover:text-red-500">Exclusive Offers</h1>
            <h1 className="bg-red-500 text-white p-2 rounded-lg hover:bg-blue-600">Get Free Quotes</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
