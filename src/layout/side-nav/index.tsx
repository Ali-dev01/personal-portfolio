"use client";
import { useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { NAVITEMS, navData } from "./nav-data";
import { RxCross1 } from "react-icons/rx";

const SideNav = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  const handleNav = (): void => {
    setShowSidenav(!showSidenav);
  };

  return (
    <>
      <div
        className={`inset-y-0 w-20 fixed bottom-0 z-30 bg-grey-main min-h-screen border-r border-gray-800 transition-transform duration-300 ease-in-out
        ${showSidenav ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <div className="bg-primary-main flex items-center justify-center h-20">
          <h1 className="text-4xl font-extrabold tracking-wider">AH</h1>
        </div>
        <div className="mt-12">
          <ul>
            {navData.map((item: NAVITEMS, i: number) => (
              <li
                className={`py-6 flex justify-center text-3xl cursor-pointer ${
                  i === 0 ? "" : "border-t border-gray-800"
                }`}
                key={i}
              >
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="fixed bottom-5 right-3 bg-primary-main z-20 p-4 rounded-full cursor-pointer text-white text-xl block sm:hidden"
        onClick={handleNav}
      >
        {showSidenav ? <RxCross1 /> : <HiOutlineMenu />}
      </div>
    </>
  );
};
export default SideNav;
