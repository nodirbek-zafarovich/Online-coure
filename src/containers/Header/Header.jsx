import React from "react";
import HeaderComp from "../../components/HeaderComp";
import HeaderBottomComp from "../../components/HeaderBottomComp";
import MainComp from "../../components/MainComp";
import IconsComp from "../../components/IconsComp";
import BgComp from "../../components/BgComp";

const Header = () => {
  return (
    <div className="container mx-auto py-5">
      <HeaderComp />
      <HeaderBottomComp />
      <MainComp />
      <IconsComp />
      <BgComp />
    </div>
  );
};

export default Header;
