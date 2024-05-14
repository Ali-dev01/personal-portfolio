"use client";

import { useState } from "react";
import { MdEmail, MdLightMode, MdNightlightRound, MdPhone } from "react-icons/md";

const Header = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className="px-3 md:px-6 lg:px-10 py-4 gap-4 flex justify-between">
      <div className="flex gap-2 sm:gap-10 flex-col sm:flex-row">
        <div className="flex gap-3 sm:gap-2 items-center">
          <MdPhone className="text-primary-main text-lg" />
          <p className="text-sm">+92-312-0790-641</p>
        </div>
        <div className="flex gap-3 sm:gap-2 items-center">
          <MdEmail className="text-primary-main text-lg" />
          <p className="text-sm">alidev098@gmail.com</p>
        </div>
      </div>
      <div
        className="bg-grey-main p-4 rounded-full cursor-pointer"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <MdLightMode className="text-xl" /> : <MdNightlightRound className="text-xl" />}
      </div>
    </div>
  );
};
export default Header;
