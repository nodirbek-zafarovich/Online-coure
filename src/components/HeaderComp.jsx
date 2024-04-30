import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function HeaderComp() {
  return (
    <div className="bg-orange-400 container rounded-xl">
      <h1 className="text-white , items-center flex gap-[23px] justify-center py-4 text-base leading-6 ">
        Free Courses 🌟 Sale Ends Soon, Get It Now <FaArrowRight />
      </h1>
    </div>
  );
}

export default HeaderComp;
