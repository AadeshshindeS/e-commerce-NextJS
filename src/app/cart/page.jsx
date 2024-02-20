"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartCount,
  deleteCart,
  incrementCartCount,
  updateCartCount,
} from "../store/crudSlice";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartData } = useSelector((state) => state);
  console.log(cartData);
  return (
    <div className="w-[100%]  px-14 space-y-2 mb-5">
      <button
        className="bg-indigo-400 px-5 py-1 rounded-md text-white font-semibold mt-2"
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <div className="w-[100%] h-[100%] space-y-2 flex flex-col items-center">
        {cartData.map((item) => {
          return (
            <div
              className="w-[85%] h-[100px] bg-yellow-400 flex items-center justify-between px-5 rounded-md"
              key={item.id}
            >
              <Image
                alt="error"
                src={item?.thumbnail}
                width={100}
                height={100}
                className="rounded-full"
              />

              <h1 className="font-semibold text-lg">{item?.title}</h1>

              <h1 className="font-semibold text-lg">₹{item?.price}/-</h1>

              <div className="flex justify-between w-[80px]">
                <button
                  className="font-semibold bg-green-500 px-2"
                  onClick={() => dispatch(decrementCartCount(item))}
                >
                  -
                </button>
                <h1 className="font-semibold text-lg">{item?.count}</h1>
                <button
                  className="font-semibold bg-green-500 px-2"
                  onClick={() => dispatch(incrementCartCount(item))}
                >
                  +
                </button>
              </div>

              <h1 className="font-bold text-lg">₹{item?.price * 1}/-</h1>

              <button
                className="bg-red-700 px-3 py-1"
                onClick={() => dispatch(deleteCart(item.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;

{
  /* <div className="w-[85%] h-[100px] bg-yellow-400 flex items-center justify-between px-5">
          <Image alt="error" src="/logo.png" width={100} height={100} />

          <h1 className="font-semibold text-lg">Iphone 10</h1>

          <h1 className="font-semibold text-lg">₹500/-</h1>

          <div className="flex justify-between w-[80px]">
            <button className="font-semibold bg-green-500 px-2">-</button>
            <h1 className="font-semibold text-lg">1</h1>
            <button className="font-semibold bg-green-500 px-2">+</button>
          </div>

          <h1 className="font-bold text-lg">₹500/-</h1>

          <button className="bg-red-700 px-3 py-1">Delete</button>
        </div> */
}
