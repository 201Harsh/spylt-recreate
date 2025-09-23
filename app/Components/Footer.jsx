import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-full bg-[#222123] relative">
      <div className="w-full flex items-center justify-center pt-36 relative z-10">
        <h1 className="text-8xl font-Antonio font-bold text-[#FAEADE] uppercase">
          #chugpresponsibly
        </h1>
      </div>
      <div className="w-full flex items-center justify-center mt-10 gap-4 relative z-10">
        <div className="p-5 border border-[#faeade91] rounded-full cursor-pointer hover:bg-[#faeade1f] transition-all duration-200 ease-in hover:backdrop-blur-xs">
          <img src="/images/insta.svg" alt="" />
        </div>
        <div className="p-5 border border-[#faeade91] rounded-full cursor-pointer hover:bg-[#faeade1f] transition-all duration-200 ease-in hover:backdrop-blur-xs">
          <img src="/images/yt.svg" alt="" />
        </div>
        <div className="p-5 border border-[#faeade91] rounded-full cursor-pointer hover:bg-[#faeade1f] transition-all duration-200 ease-in hover:backdrop-blur-xs">
          <img src="/images/tiktok.svg" alt="" />
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-20 h-44 relative z-10">
        <div className="w-1/2 p-4 flex gap-5">
          <h4 className="font-inter text-sm font-semibold text-[#FAEADE]">
            SPYLT Flavour
          </h4>
          <ul className="flex flex-col gap-2 font-inter text-sm font-semibold text-[#FAEADE] font-inter">
            <li>Chung Club</li>
            <li>Student Marketing</li>
            <li>Dairy Dealers</li>
          </ul>
          <ul className="flex flex-col gap-2 font-inter text-sm font-semibold text-[#FAEADE] font-inter">
            <li>Company</li>
            <li>Contact</li>
            <li>Tasty Talks</li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col items-end justify-center px-10">
          <p className="font-inter text-sm font-semibold text-[#FAEADE]">
            Get Exclusive Early Access and Stay <br /> Informed About Product
            Updates, Events, and More!
          </p>
          <form className="w-1/2 flex gap-4 relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 mt-7 border-b text-3xl border-[#faeade91] outline-none placeholder:text-3xl placeholder:text-[#faeade59] text-[#faeade] placeholder:font-Antonio placeholder:font-semibold"
            />
            <button className="absolute top-10 right-1">
              <img src="/images/arrow.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="w-full absolute bottom-0 flex items-center justify-between p-6 z-20">
        <div className="w-full">
          <p className="font-inter text-sm font-semibold text-[#FAEADE]">
            Copyright © 2025 Spylt - All Rights Reserved
          </p>
        </div>
        <div className="w-1/5 flex gap-4">
          <p className="font-inter text-sm font-semibold text-[#FAEADE] cursor-pointer transition-all duration-200 ease-in-out hover:opacity-50">
            Privacy Policy
          </p>
          <p className="font-inter text-sm font-semibold text-[#FAEADE] cursor-pointer transition-all duration-200 ease-in-out hover:opacity-50">
            Terms & Conditions
          </p>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="h-full w-full object-cover absolute bottom-0 left-0 z-0"
      >
        <source src="/videos/splash3.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Footer;
