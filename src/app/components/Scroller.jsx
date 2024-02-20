"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imagesData = [
  "https://t4.ftcdn.net/jpg/04/14/22/55/360_F_414225555_k4FE9n2fjaBen0QlOW1kSjaQBWfjfCjF.jpg",
  "https://t4.ftcdn.net/jpg/02/24/88/07/360_F_224880717_YmNbocwrjak9AyvQ9QrTnELWCeOGtKvH.jpg",
  "https://t4.ftcdn.net/jpg/05/12/31/31/360_F_512313150_SXjoxQrERJnZZeMzLQPjEYCQS67qdJFs.jpg",
  "https://png.pngtree.com/png-clipart/20220502/original/pngtree-used-gadgets-sale-gadget-exchange-banner-png-image_7639017.png",
];

const Scroller = () => {
  const [skeleton, setSetskeleton] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setSetskeleton(false);
    }, 2200);
  }, []);

  return (
    <div className="w-[100%] h-[400px]">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        // autoPlaySpeed={1200}
        slidesToSlide={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="h-[100%] w-[100%]"
        autoPlay={true}
      >
        {imagesData.map((item, index) => {
          return (
            <div className="w-[100%] h-[400px] relative" key={index}>
              {!skeleton ? (
                <img
                  src={item}
                  alt="error_banner"
                  className="w-[100%] h-[100%] object-fill"
                />
              ) : (
                <div
                  role="status"
                  className="flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 h-full absolute left-0 right-0 w-full"
                >
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Scroller;

{
  /* <div className="w-[100%] h-[400px] bg-red-500">
<img
  src="https://t4.ftcdn.net/jpg/05/12/31/31/360_F_512313150_SXjoxQrERJnZZeMzLQPjEYCQS67qdJFs.jpg"
  alt="error_banner1"
  className="w-[100%] h-[100%] object-fill"
/>
</div>
<div className="w-[100%] h-[400px] bg-red-500">
<img
  src="https://t4.ftcdn.net/jpg/02/24/88/07/360_F_224880717_YmNbocwrjak9AyvQ9QrTnELWCeOGtKvH.jpg"
  alt="error_banner1"
  className="w-[100%] h-[100%] object-fill"
/>
</div>
<div className="w-[100%] h-[400px] bg-red-500">
<img
  src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-used-gadgets-sale-gadget-exchange-banner-png-image_7639017.png"
  alt="error_banner1"
  className="w-[100%] h-[100%] object-fill"
/>
</div> */
}
