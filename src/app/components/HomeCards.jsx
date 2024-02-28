"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartButton,
  productThunk,
  totalAmount,
  totalCount,
} from "../store/crudSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeCards = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsData);
  const router = useRouter();

  const notify = () => toast("Added to Cart Successfully!!!");

  useEffect(() => {
    dispatch(productThunk());
  }, []);

  const navigations = (item) => {
    router.push(`/${item.id}`);
  };

  // console.log(productsData.products);

  return (
    <>
      <div className="w-[100%] flex items-center justify-center h-[70px]">
        <h1 className=" text-xl font-bold">SHOP NEW COLLECTION</h1>
      </div>
      <div className="w-[100%] flex flex-wrap space-x-4 items-center justify-evenly">
        {productsData?.products?.map((item) => {
          return (
            <div
              className="shadow  w-[20%] h-[310px] space-y-1 rounded-xl flex flex-col items-center mb-10"
              key={item.id}
            >
              <div className="h-[50%] flex items-center justify-center w-[100%] overflow-hidden cursor-pointer">
                <Image
                  src={`${item?.images[0]}`}
                  width={150}
                  height={150}
                  className=" object-contain w-full h-full rounded-tl-xl rounded-tr-xl"
                  alt="error"
                  onClick={() => navigations(item)}
                />
              </div>

              <h1 className="font-bold">{item.title}</h1>

              <div className="w-[100%] flex justify-evenly">
                <h1>
                  <b>Price:</b> ${item.price}
                </h1>
                <h1>
                  <b>Rating:</b> {item.rating}⭐
                </h1>
              </div>

              <h1>
                <b>Stock:</b> {item.stock}
              </h1>
              <h1>
                <b>Category:</b> {item.category}
              </h1>

              <button
                className="bg-orange-400 text-white px-4 py-1 rounded-md hover:opacity-80"
                onClick={() => {
                  notify();
                  dispatch(addToCartButton(item));
                  dispatch(totalAmount());
                  dispatch(totalCount());
                  dispatch(totalCount());
                  dispatch(totalAmount());
                }}
              >
                Add To Cart
              </button>
              <ToastContainer />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeCards;
