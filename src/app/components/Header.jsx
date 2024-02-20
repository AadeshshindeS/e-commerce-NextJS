"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import ReusableIcon from "./ReusableIcon";

const Header = () => {
  return (
    <div className="bg-black h-[30px] w-[100%] flex justify-between px-16">
      <div className="flex bg-yellow-500 space-x-3 items-center w-[20%] justify-center text-white cursor-pointer">
        {/* <ReusableIcon name={<FaPhone />} /> */}
        <h3 className="text-sm">Call Now : +91 8369662327</h3>
      </div>

      <div className="flex w-[35%] space-x-2 items-center justify-center text-sm text-white ">
        <h3 className="cursor-pointer">Support |</h3>
        <h3 className="cursor-pointer"> Store Locator |</h3>
        <h3 className="cursor-pointer">Free Shopping</h3>
      </div>
    </div>
  );
};

export default Header;
