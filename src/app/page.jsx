import Scroller from "./components/Scroller";
import HomeCards from "./components/HomeCards";
// import { useDispatch } from "react-redux";

// const apiCall = async () => {
//   let resp = await fetch("https://dummyjson.com/products");
//   let data = await resp.json();
//   return data;
// };

const page = () => {
  // let data = await apiCall();
  // console.log(data.products);

  return (
    <div className="mb-10">
      {/* <Scroller /> */}

      <HomeCards />
    </div>
  );
};

export default page;
