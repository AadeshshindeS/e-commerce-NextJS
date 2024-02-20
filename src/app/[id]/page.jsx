import Link from "next/link";
import SingleProduct from "../components/SingleProduct";

const page = async ({ params }) => {
  const callApiForSingleProduct = async () => {
    const resp = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await resp.json();
    return data;
  };

  const productInfo = await callApiForSingleProduct();
  return (
    <div className=" w-full h-[83vh] flex items-center justify-center absolute">
      <Link href="/">
        <div className="relative bottom-[235px] cursor-pointer w-[30px] h-[30px] flex items-center justify-center">
          ❌
        </div>
      </Link>

      <SingleProduct data={productInfo} />
    </div>
  );
};

export default page;
