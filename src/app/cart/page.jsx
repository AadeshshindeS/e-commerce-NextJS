"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartCount,
  deleteCart,
  incrementCartCount,
  totalAmount,
  totalCount,
} from "../store/crudSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartData, totalAmountCart } = useSelector((state) => state);

  const notify = () => toast("Remove from Cart Successfully!");

  return (
    <div className="w-[100%]  px-14 space-y-2 mb-5">
      <button
        className="bg-indigo-400 px-5 py-1 rounded-md text-white font-semibold mt-2"
        onClick={() => router.push("/")}
      >
        Back
      </button>

      <div className="w-[100%] h-[100%] space-y-3 flex flex-col items-center">
        {cartData.map((item) => {
          return (
            <div
              className="cart_box w-[85%] h-[100px] flex items-center justify-between px-5 rounded-md"
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
                  onClick={() => {
                    dispatch(decrementCartCount(item));
                    dispatch(totalAmount());
                    dispatch(totalCount());
                  }}
                >
                  -
                </button>
                <h1 className="font-semibold text-lg">{item?.count}</h1>
                <button
                  className="font-semibold bg-green-500 px-2"
                  onClick={() => {
                    dispatch(incrementCartCount(item));
                    dispatch(totalAmount());
                    dispatch(totalCount());
                  }}
                >
                  +
                </button>
              </div>

              <h1 className="font-bold text-lg">
                ₹{item?.price * item?.count}/-
              </h1>

              <button
                className="bg-red-700 px-3 py-1 rounded-md text-white"
                onClick={() => {
                  notify();
                  dispatch(deleteCart(item.id));
                  dispatch(totalAmount());
                  dispatch(totalCount());
                }}
              >
                remove
              </button>
              <ToastContainer />
            </div>
          );
        })}
      </div>

      {cartData.length > 0 ? (
        <div className="">
          <div className="h-1 w-[95%] border-2 border-gray-400"></div>
          <div className="flex space-x-3 justify-end w-[90%] text-lg">
            <h1 className="font-semibold">Total Amount : </h1>
            <h1 className="font-bold">${totalAmountCart}/-</h1>
          </div>
        </div>
      ) : (
        <div className="w-full h-[400px] flex items-center justify-center relative">
          <Image src="/emptycart.jpg" alt="error" width={400} height={400} />
          <button
            className="bg-[#E62E71] text-white absolute bottom-[70px] right-[526px] px-3 py-1 rounded-md"
            onClick={() => router.push("/")}
          >
            Continue Shopping
          </button>
        </div>
      )}
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
