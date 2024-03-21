import React from "react";
import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import S5 from "../assets/S5.png";
import S6 from "../assets/S6.png";
import S7 from "../assets/S7.png";
import S8 from "../assets/S8.png";
import Line from "../assets/Line.png";

const SideMenu = () => {
  return (
    <div className="w-full flex flex-col space-y-4 items-center  bg-transparent xl:px-4   h-screen justify-start xl:justify-center ">
      <div className="hidden xl:flex justify-center  ">
        <img src={Line} />
      </div>
      <div className=" flex xl:flex-col flex-row xl:space-y-6 space-x-6 xl:space-x-0 space-y-0">
        <button>
          {" "}
          <img src={S1} className="flex w-5 xl:w-9 hover:animate-wiggle" />
          {/* <img src={S5} className="w-5 xl:hidden hover:animate-wiggle" /> */}
        </button>
        <button>
          {" "}
          <img src={S2} className="flex w-5 xl:w-9 hover:animate-wiggle" />
          {/* <img src={S6} className="w-5 xl:hidden hover:animate-wiggle" /> */}
        </button>
        <button>
          {" "}
          <img src={S3} className="flex w-5 xl:w-9 hover:animate-wiggle" />
          {/* <img src={S7} className="w-5 xl:hidden hover:animate-wiggle" /> */}
        </button>
        <button>
          {" "}
          <img src={S4} className="flex w-5 xl:w-9 hover:animate-wiggle" />
          {/* <img src={S8} className="w-5 xl:hidden hover:animate-wiggle" /> */}
        </button>
      </div>
      <div className="hidden xl:flex justify-center ">
        <img src={Line} />
      </div>
    </div>
  );
};

export default SideMenu;
