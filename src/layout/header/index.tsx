"use client";

import { useState } from "react";
import { MdEmail, MdLightMode, MdNightlightRound, MdPhone } from "react-icons/md";

const Header = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className="px-12 py-6 flex justify-between">
      <div className="flex gap-10">
        <div className="flex gap-3 items-center">
          <MdPhone className="text-primary-main text-lg" />
          <p className="text-sm">+92-312-0790-641</p>
        </div>
        <div className="flex gap-3 items-center">
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
