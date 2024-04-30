import React from "react";
import SiteLogo from "../assets/Logo.svg";

const HeaderBottomComp = () => {
  return (
    <div className="flex  gap-6 px-[50px]">
      <img src={SiteLogo} alt="Site Logo" />
      <nav className="flex gap-[480px]  ">
        <ul className="flex gap-4 my-4">
          <a href="#">
            <li className=" font-normal hover:bg-sky-100 p-3 rounded-lg ">Home</li>
          </a>
          <a href="#">
            <li className=" font-normal hover:bg-sky-100 p-3 rounded-lg ">Courses</li>
          </a>
          <a href="#">
            <li className=" font-normal hover:bg-sky-100 p-3 rounded-lg ">About Us</li>
          </a>
          <a href="#">
            <li className=" font-normal hover:bg-sky-100 p-3 rounded-lg ">Pricing</li>
          </a>
          <a href="#">
            <li className=" font-normal hover:bg-sky-100 p-3 rounded-lg ">Contact</li>
          </a>
        </ul>
        <div className="flex py-3 gap-3">
          <button className="bg-slate-300 px-4 rounded-lg hover:text-white hover:bg-orange-500">Sign Up </button>
          <button className=" text-black bg-slate-300 hover:text-white hover:bg-orange-500 px-4 rounded-lg">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottomComp;
