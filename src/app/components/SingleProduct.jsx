"use client";
import React, { useState } from "react";

const SingleProduct = ({ data }) => {
  const [image, setImage] = useState(data?.thumbnail);

  const loadImage = (item) => {
    setImage(item);
  };

  return (
    <div className="w-[80%] h-[83%] flex border border-black">
      <div className="w-[40%] h-full 500 flex flex-col">
        <div className="w-[100%] h-[66%]  flex items-center justify-center border border-b-black">
          <img src={image} alt="error" className="w-[90%] h-[90%] " />
        </div>

        <div className="w-[100%] h-[34%]  flex flex-wrap items-center justify-evenly space-x-2">
          {data?.images?.map((item, index) => {
            return (
              <img
                src={item}
                alt="error"
                key={index}
                className="w-[60px] h-[60px] border border-black px-[2px] py-[2px] cursor-pointer"
                onClick={() => loadImage(item)}
              />
            );
          })}
        </div>
      </div>

      <div className="w-[60%] h-full border border-l-black px-3 py-3">
        <div className="w-[100%] h-[100%]  space-y-3">
          <h1 className="text-2xl font-semibold">{data?.title}</h1>

          <h2 className="text-base font-semibold ">{data?.description}</h2>

          <h4 className="text-sm text-blue-500 cursor-pointer hover:text-red-500 hover:underline">
            Visit the Storite Store
          </h4>

          <div className="flex space-x-2">
            <h1 className="font-semibold">Rating: </h1>
            <h1>{data?.rating} </h1>
            <h1>⭐⭐⭐⭐</h1>
          </div>

          <div className="flex space-x-2">
            <h1 className="font-semibold">Stock Available: </h1>
            <h1>{data?.stock}</h1>
          </div>

          <div className="flex space-x-2">
            <h1 className="font-semibold">Discount Percentage: </h1>
            <h1>{data?.discountPercentage}%</h1>
          </div>

          <div className="flex space-x-2">
            <h1 className="font-semibold">Price:</h1>
            <h1> ₹{data?.price}/-</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
