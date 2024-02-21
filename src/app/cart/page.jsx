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

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartData, totalAmountCart } = useSelector((state) => state);
  console.log(cartData);
  return (
    <div className="w-[100%]  px-14 space-y-2 mb-5">
      <button
        className="bg-indigo-400 px-5 py-1 rounded-md text-white font-semibold mt-2"
        onClick={() => router.push("/")}
      >
        Back
      </button>

      {cartData.length !== 0 ? (
        <div className="space-y-3">
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
                      onClick={() => {
                        dispatch(decrementCartCount(item));
                        dispatch(totalCount());
                        dispatch(totalAmount());
                      }}
                    >
                      -
                    </button>
                    <h1 className="font-semibold text-lg">{item?.count}</h1>
                    <button
                      className="font-semibold bg-green-500 px-2"
                      onClick={() => {
                        dispatch(incrementCartCount(item));
                        dispatch(totalCount());
                        dispatch(totalAmount());
                      }}
                    >
                      +
                    </button>
                  </div>

                  <h1 className="font-bold text-lg">
                    ₹{item?.price * item?.count}/-
                  </h1>

                  <button
                    className="bg-red-700 px-3 py-1"
                    onClick={() => {
                      dispatch(deleteCart(item.id));
                      dispatch(totalCount());
                      dispatch(totalAmount());
                    }}
                  >
                    remove
                  </button>
                </div>
              );
            })}
          </div>

          {cartData.length !== 0 && (
            <div className="w-[100%] flex items-center justify-center  flex-col">
              <div className="border border-black w-[95%] h-[1px]"></div>
              <div className="w-[95%] flex justify-end space-x-2 text-lg">
                <h1>Total Amount:</h1>
                <h1 className="font-semibold">₹{totalAmountCart}/-</h1>
                {/* <h1 className="font-semibold">₹{}/-</h1> */}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-[100%] h-[400px] flex items-center justify-center flex-col">
          <img
            src="/cart.png"
            alt="error"
            className="w-[40%] h-[40%] object-contain"
          />

          <h1 className="text-xl font-bold">YOUR CART IS EMPTY !!!</h1>
        </div>
      )}
    </div>
  );
};

export default page;
