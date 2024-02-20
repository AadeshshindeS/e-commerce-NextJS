"use client";
import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import ReusableIcon from "./ReusableIcon";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartData = useSelector((state) => state.cartData);
  const router = useRouter();

  const goCart = (path) => {
    router.push(path);
  };

  return (
    <div className="h-[75px] w-[100%] flex items-center justify-center border-2">
      <div className="w-[80%] h-[100%] flex items-center justify-between">
        <Image
          src="/logo.png"
          width={80}
          height={80}
          alt="error_in_navbar"
          className="cursor-pointer"
          onClick={() => goCart("/")}
        />

        <div className="flex items-center space-x-2 px-2 rounded-md bg-gray-200">
          <ReusableIcon name={<FaSearch size={20} />} />
          {/* <FaSearch size={20} /> */}
          <input
            type="text"
            placeholder="Search your Product..."
            className="outline-none border-none px-2 py-2 w-[550px] bg-gray-200 "
          />
        </div>

        <div className="flex justify-center items-center space-x-2 px-3 py-1 border-2 border-black rounded-full">
          <ReusableIcon name={<IoPersonCircle size={35} color="yellow" />} />
          <h2 className="text-sm">MY ACCOUNT</h2>
        </div>

        <div
          className="flex items-center justify-evenly w-[80px] h-[50px] space-x-2 border border-gray-400 rounded-lg cursor-pointer"
          onClick={() => goCart("/cart")}
        >
          <h1 className="text-2xl">{cartData.length}</h1>
          <ReusableIcon name={<FaCartShopping size={30} />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
