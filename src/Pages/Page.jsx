import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import gsap from "gsap";
import BackBtn from "../assets/backBtn.png";
import FrowardBtn from "../assets/forwardBtn.png";
import AirBg from "../assets/airbg.png";

import SideMenu from "../Component/SideMenu";
import Group4 from "../assets/Group 4.png";
import Group5 from "../assets/Group 5.png";
import homeBG2 from "../assets/homebg3.svg";
import homeBG3 from "../assets/homebg3.png";
import BuyNow from "../assets/buynow.png";

const safeDocument = typeof document !== "undefined" ? document : {};

const Page = () => {
  // const comp = useRef(null);

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);

  const [isVisible1, setIsVisible1] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible1(false);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);

  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentSection]);

  const handleNext = () => {
    console.log("next");
    if (currentSection < 4) {
      setLoading(true);
      setTimeout(() => {
        setCurrentSection(currentSection + 1);
      }, 300); // Adjust this delay according to your preference
    }
  };

  const handleBack = () => {
    if (currentSection > 1) {
      setLoading(true);
      setTimeout(() => {
        setCurrentSection(currentSection - 1);
      }, 300); // Adjust this delay according to your preference
    }
  };

  // useEffect(() => {
  //   gsap.to(".apply-animation", { opacity: 1, duration: 2 });
  // }, [currentSection]);

  return (
    <div className="">
      <div className="flex  ">
        <div className="pointer-events-none absolute left-0 top-0 z-50  w-full xl:w-1/12 h-screen ">
          <SideMenu className="flex items-start " />
        </div>
      </div>

      <div className="flex flex-col  relative">
        <div
          className={`section ${
            loading
              ? "loading"
              : "absolute  bg-cover w-full bg-top bg-no-repeat  h-screen overflow-y-hidden z-40 "
          }`}
          id="1"
          style={{ display: currentSection === 1 ? "block" : "none" }}
        >
          <video
            autoPlay
            loop
            muted
            className="hidden  sm:flex top-0 left-0 h-full w-full object-cover  absolute z-0 opacity-95"
            src="/video/page01.mp4"
          ></video>

          <video
            autoPlay
            loop
            muted
            className="sm:hidden  top-0 left-0 w-full h-full object-cover absolute z-0 opacity-95"
            src="/video/page01M0b.mp4"
          />

          {/* Main Container */}

          <div className="border-5 border-red-600 items-center  h-screen flex flex-col xl:flex-row  ">
          
            {/* Left side */}
            <div className=" items-end border-5 border-red-600 w-full  h-screen sm:w-1/2 flex justify-center  sm:items-center xl:items-center bg-blend-overlay relative  ">
              <img
                src={homeBG2}
                className="opacity-50 absolute z-0 animate-spin_slow  w-2/4 xl:w-3/4 flex justify-end items-end"
              />
              <img
                src={homeBG3}
                className="absolute hover:animate-wiggle z-10 w-2/4 :3/4 xl:w-3/4"
              />
            </div>
            {/* right Side */}
            <div className=" w-full h-screen sm:h-auto xl:w-1/2 flex flex-col justify-center  items-center xl:items-end gap-1  px-5 md:px-10 xl:px-24">
              <div className=" flex w-full flex-col xl:justify-center items-center xl:items-end  ">
                <div className="text-5xl xl:text-[200px] font-avatar xl:mr-16 flex justify-start text-white animate-sliden [--slidein-delay:300ms]  opacity-0">
                  AIR
                </div>
                <div className="text-5xl xl:text-[200px] font-avatar xl:mr-16  text-white flex animate-sliden [--slidein-delay:500ms] opacity-0">
                  BENDER
                </div>
              </div>

              <div className=" text-white font-kotta text-sm xl:text-xl flex justify-end  text-center xl:text-justify items-end animate-sliden [--slidein-delay:700ms] opacity-0  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </div>
              <div className="font-kotta text-sm   flex justify-end  rounded-2xl xl:w-3/12 px-6 xl:px-2 py-2 mt-5 hover:opacity-75 text-white">
                More ->>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0  w-full z-20">
            <div className="flex   flex-row justify-center  xl:justify-between   px-3 xl:px-36 xl:py-6  w-full  bg-gradient-to-r from-[#000000] to-white/30 items-center">
              <div className="flex  xl:gap-5 items-center" onClick={handleNext}>
                <button className="bg-transparent text-white px-5 py-2 rounded-2xl hover:animate-wiggle">
                  <img
                    src={FrowardBtn}
                    alt="forwardBtn"
                    className="w-12 xl:w-20 xl:h-20"
                  />
                </button>
              </div>
              <div className="hidden  xl:flex  text-white  ">
                <button className="w-full     font-poppins xl:text-3xl text-[#00F3FB]   rounded-2xl  px-6 xl:px-2 py-2 mt-5 hover:opacity-75 hover:text-white">
                  <img src={BuyNow} className="w-48" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`section ${
            loading
              ? "loading"
              : "hidden bg-cover bg-top bg-no-repeat h-screen  bgImg2 overflow-y-hidden absolute z-30 "
          }`}
          id="2"
          style={{ display: currentSection === 2 ? "block" : "none" }}
        >
          <video
            autoPlay
            loop
            muted
            className="hidden  sm:flex top-0 left-0 h-full w-full object-cover  absolute z-0 opacity-95"
            src="/video/page02.mp4"
          ></video>

          <video
            autoPlay
            loop
            muted
            className="sm:hidden  top-0 left-0 w-full h-full object-cover absolute z-0 opacity-95"
            src="/video/page02M0b.mp4"
          ></video>

          {/* Main Container */}

          <div className=" flex  gap-10 w-full px-4 xl:px-0 ">
            <div className="flex  flex-col w-full  xl:p-3 xl:px-24 pt-16 sm:pt-20 ">
              <div className="flex  flex-col w-full xl:flex-row  ">
                {/* right Side */}
                <div className=" w-full  xl:w-2/3  flex flex-col items-center xl:justify-center xl:items-end gap-3 xl:gap-20  ">
                  <div className="flex flex-col justify-center items-center xl:items-end ">
                    <div className=" text-5xl font-kotta  xl:text-[100px] font-bold flex items-center xl:justify-end text-white animate-sliden [--slidein-delay:300ms] opacity-0">
                      lorem ipsum
                    </div>
                  </div>

                  <div className=" w-full font-kotta text-sm xl:text-xl flex justify-end items-end text-white animate-sliden [--slidein-delay:500ms] opacity-0 ">
                    <span className=" flex text-center xl:text-justify xl:pl-16">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </span>
                  </div>

                  {/* <button className=" bg-[#004061]  font-poppins xl:text-3xl text-[#00F3FB]   rounded-2xl xl:w-3/12 px-6 xl:px-2 py-2 mt-5 hover:opacity-75 hover:text-white">
                    MORE INFO
                  </button> */}
                  <div className="font-kotta xl:text-3xl    rounded-2xl xl:w-3/12 px-6 xl:px-2 py-2 mt-5 hover:opacity-75 hover:text-white">
                    More ->>
                  </div>
                </div>
                {/* Left side */}
                <div className="relative xl:w-1/2  flex justify-center items-center   overflow-hidden">
                  <img
                    src={AirBg}
                    alt="homebg"
                    className={`absolute animate-ping transition-opacity duration-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <iframe
                    src="https://my.spline.design/airblendercopy-8683ce78bc30a2168ab05707d307381b/"
                    width="100%"
                    height="750px"
                    className="hidden md:flex  z-10 "
                  ></iframe>
                  <iframe
                    src="https://my.spline.design/airblenderpage2mob-1f01f12ba82a1f9cbe8e626eb9fc6598/"
                    width="100%"
                    height="500px"
                    className="md:hidden"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0  w-full z-20">
            <div className="flex   flex-row justify-center xl:justify-between   px-3 xl:px-36 xl:py-6  w-full  bg-gradient-to-r from-[#023F5F] to-white/30 items-center">
              <div className="flex  xl:gap-5 items-center">
                {" "}
                <button
                  className="bg-transparent text-white xl:px-5 xl:py-2 rounded-2xl hover:animate-wiggle"
                  onClick={handleBack}
                >
                  <img
                    src={BackBtn}
                    alt="backBtn"
                    className="w-12 xl:w-20 xl:h-20"
                  />
                </button>
                <button
                  className="bg-transparent text-white px-5 py-2 rounded-2xl hover:animate-wiggle"
                  onClick={handleNext}
                >
                  <img
                    src={FrowardBtn}
                    alt="forwardBtn"
                    className="w-12 xl:w-20 xl:h-20"
                  />
                </button>
              </div>
              <div className="hidden xl:flex text-white  ">
                <button className="w-full   font-poppins xl:text-3xl text-[#00F3FB]   rounded-2xl  px-6 xl:px-2 py-2 mt-5 hover:opacity-75 hover:text-white">
                  <img src={BuyNow} className="w-48" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`section ${
            loading ? "loading" : " w-full h-screen  absolute z-20"
          }`}
          style={{ display: currentSection === 3 ? "block" : "none" }}
        >
          <video
            autoPlay
            loop
            muted
            className="hidden  sm:flex top-0 left-0 h-full w-full object-cover  absolute z-0 opacity-95"
            src="/video/page03.mp4"
          ></video>

          <video
            autoPlay
            loop
            muted
            className="sm:hidden  top-0 left-0 w-full h-full object-cover absolute z-0 opacity-95"
            src="/video/page03M0b.mp4"
          ></video>

          {/* Main Container */}

          <div className=" flex  min-h-screen gap-10 w-full px-4 xl:px-0  pt-16 sm:pt-2 ">
            <div className="flex  flex-col w-full  xl:p-3 xl:px-24 pt-4 xl:pt-20 ">
              <div className="flex  flex-col w-full  lg:flex-row  items-center ">
                {/* Left side */}
                <div className=" w-full lg:w-1/2 flex justify-center items-center overflow-hidden ">
                  {/* <img
                    src={BurnBg}
                    alt="homebg"
                    className={`absolute animate-spin transition-opacity duration-500 ${
                      isVisible1 ? "opacity-15" : "opacity-0"
                    }`}
                  /> */}
                  <iframe
                    src="https://my.spline.design/airblendercopy-8683ce78bc30a2168ab05707d307381b/"
                    // frameborder="0"
                    width="100%"
                    height="750px"
                    className="hidden lg:flex ml-24 z-10"
                  ></iframe>
                  <iframe
                    src="https://my.spline.design/airblenderpage2mob-1f01f12ba82a1f9cbe8e626eb9fc6598/"
                    // frameborder="0"
                    width="100%"
                    height="400px"
                    className="lg:hidden opacity-80 "
                  ></iframe>
                </div>
                {/* right Side */}
                <div className="w-full  lg:w-1/2  flex flex-col items-center xl:justify-center xl:items-end gap-3 xl:gap-20 ">
                  <div className="flex flex-col  justify-center items-center xl:items-end ">
                    <div className="text-4xl  font-kotta  xl:text-[160px] font-bold flex items-center xl:justify-end text-white animate-sliden [--slidein-delay:200ms] ">
                      tokenomics
                    </div>
                  </div>

                  <div className=" w-full flex flex-col items-center justify-center  ">
                    <div className="  w-full animate-sliden [--slidein-delay:300ms] opacity-0">
                      <div className="flex justify-end">
                        <img src={Group5} />
                      </div>
                    </div>
                    <div className="   w-full animate-sliden [--slidein-delay:500ms] opacity-0">
                      <div className=" flex justify-center     ">
                        <img src={Group4} className="" />
                      </div>
                    </div>
                    <div className=" flex   w-full animate-sliden [--slidein-delay:700ms] opacity-0">
                      <div className="  flex justify-start ">
                        <img src={Group5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-full bottom-0 z-50">
            <div className="flex   flex-row justify-center xl:justify-between   px-3 xl:px-36 xl:py-6  w-full bg-gradient-to-r from-[#4E000C] to-white/30">
              <div className="flex  xl:gap-5 boder">
                {" "}
                <button
                  className="bg-transparent text-white xl:px-5 xl:py-2 rounded-2xl hover:animate-wiggle"
                  onClick={handleBack}
                >
                  <img
                    src={BackBtn}
                    alt="backBtn"
                    className="w-12 xl:w-20 xl:h-20"
                  />
                </button>
                <button
                  className="bg-transparent text-white px-5 py-2 rounded-2xl hover:animate-wiggle"
                  onClick={handleNext}
                >
                  <img
                    src={FrowardBtn}
                    alt="forwardBtn"
                    className="w-12 xl:w-20 xl:h-20"
                  />
                </button>
              </div>
              <div className="hidden xl:flex text-white ">
                <button className="w-full   font-poppins xl:text-3xl text-[#00F3FB]   rounded-2xl  px-6 xl:px-2 py-2 mt-5 hover:opacity-75 hover:text-white">
                  <img src={BuyNow} className="w-48" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="4"
          className={`section ${
            loading
              ? "loading"
              : "w-full bg-cover  h-screen bg-top bg-no-repeat  bgImg3 overflow-y-hidden absolute z-20"
          }`}
          id="3"
          style={{ display: currentSection === 4 ? "block" : "none" }}
        >
          <video
            autoPlay
            loop
            muted
            className="hidden  sm:flex top-0 left-0 h-full w-full object-cover"
          >
            <source src="/video/video.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            className="sm:hidden  top-0 left-0 w-full h-full object-cover"
          >
            <source src="/video/videoM0b.mp4" type="video/mp4" />
          </video>

          <div className="absolute w-full bottom-0 ">
            <div className="flex  flex-row justify-center xl:justify-between  px-3 xl:px-36 xl:py-6  w-full bg-gradient-to-r from-[#092635] to-white/30 ">
              <div className="flex py-2 xl:py-0  xl:gap-5 boder">
                {" "}
                <button
                  className="bg-transparent text-white xl:px-5 xl:py-2 rounded-2xl hover:animate-wiggle"
                  onClick={handleBack}
                >
                  <img
                    src={BackBtn}
                    alt="backBtn"
                    className="w-12 xl:w-20 xl:h-20"
                  />
                </button>
              </div>
              <div className="hidden xl:flex text-white">
                <button className="w-full   font-poppins xl:text-3xl text-[#00F3FB]   rounded-2xl  px-6 xl:px-2 py-2 mt-5 hover:opacity-75 hover:text-white">
                  <img src={BuyNow} className="w-48" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
