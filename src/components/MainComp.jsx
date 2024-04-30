import React from "react";
import Chaqmoq from "../assets/icon2.svg";
import Line from "../assets/line.svg";

function MainComp() {
  return (
    <div className="container mx-auto ">
      <img src={Line} alt="Chaqmoq icons" className="mt-[70px] mx-[300px]" />
      <div className="flex gap-4 justify-center items-center">
        <img src={Chaqmoq} alt="Chaqmoq icon " />
        <h1 className="font-semibold text-4xl ">
          <span className="text-orange-500 ">Unlock </span>Your Creative
          Potential
        </h1>
      </div>
      <div>
        <p className=" my-4 font-sans text-4xl text-center">
          with Online Design and Development Courses.
        </p>
        <p className="my-3 text-center text-xl mb-[40px]">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
      <div className="flex gap-4 text-center items-center justify-center">
        <button className=" text-black bg-slate-300  rounded-xl hover:bg-orange-500 hover:text-white px-4 py-4">
          Explore Courses
        </button>
        <button className="bg-slate-300 py-4 px-4 rounded-xl hover:bg-orange-500 hover:text-white">
          View Pricing
        </button>
      </div>
    </div>
  );
}

export default MainComp;
