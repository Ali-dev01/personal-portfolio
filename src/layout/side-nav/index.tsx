"use client";
import Link from "next/link";
import { useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";
import { NAVITEMS, navData } from "./nav-data";

const SideNav = () => {
  const [showSidenav, setShowSidenav] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const handleActiveNav = (title: string) => {
    setActiveNav(title);
    setTimeout(() => {
      setShowSidenav(false);
    }, 500);
  };

  const handleNav = (): void => {
    setShowSidenav(!showSidenav);
  };

  return (
    <>
      <div
        className={`inset-y-0 w-20 fixed bottom-0 z-30 bg-grey-main min-h-screen border-r border-gray-800 transition-transform duration-300 ease-in-out
        ${showSidenav ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="bg-primary-main flex items-center justify-center h-20">
          <h1 className="text-4xl font-extrabold tracking-wider">AH</h1>
        </div>
        <div className="mt-12">
          <ul>
            {navData.map((item: NAVITEMS, i: number) => {
              const IconComponent = item.icon.type;
              return (
                <li
                  key={i}
                  onClick={() => handleActiveNav(item.title)}
                  className={`py-6 flex justify-center text-3xl cursor-pointer ${
                    i === 0 ? "" : "border-t border-gray-800"
                  }`}
                >
                  <Link href={item.link}>
                    <IconComponent
                      className={`${item.title === activeNav ? "text-primary-main" : "text-white"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="fixed top-4 right-3 bg-primary-main z-20 p-3 rounded-full cursor-pointer text-white text-xl block md:hidden"
        onClick={handleNav}
      >
        {showSidenav ? <RxCross1 /> : <HiOutlineMenu />}
      </div>
    </>
  );
};
export default SideNav;
