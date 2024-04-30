import React from "react";
import Zapier from "../assets/zapier.svg";
import Spotify from "../assets/spotify.svg";
import Zoom from "../assets/zoom.svg";
import Amazon from "../assets/amazon.svg";
import Adobe from "../assets/Adobe.svg";
import Notion from "../assets/notion.svg";
import Netflix from "../assets/netflix.svg";



const IconsComp = () => {
  return (
    <div className="py-[100px]">
      <div className=" bg-slate-50 flex gap-[100px] py-6 items-center px-[70px]">
        <a href="zapier.com">
          <img src={Zapier} alt="Zapier icon" />
        </a>
        <a href="spotify.com">
          <img src={Spotify} alt="Spotify icon" />
        </a>
        <a href="zoom.com">
          <img src={Zoom} alt="Zoom icon" />
        </a>
        <a href="amazon.com">
          <img src={Amazon} alt="Amazon icon" />
        </a>
        <a href="adobe.com">
          <img src={Adobe} alt="Adobe icon" />
        </a>
        <a href="notion.com">
          <img src={Notion} alt="Notion icon" />
        </a>
        <a href="netflix.com">
          <img src={Netflix} alt="Netflix icon" />
        </a>
      </div>
    </div>
  );
};

export default IconsComp;
