import React from "react";

const PreFooter = () => {
  return (
    <div className="bg-[#222123] h-screen w-full -mt-44">
      <div className="h-full w-full pt-52 relative">
        <img src="/images/pre_bg.svg" alt="" />
        <div className="absolute top-1/2 left-14">
          <h1 className="text-8xl font-Antonio font-bold text-[#FAEADE] uppercase">
            Right around
          </h1>
          <div className="bg-[#E9AA56] mt-2 px-6 py-4 flex items-center justify-center rotate-3">
            <h1 className="text-9xl font-Antonio font-bold text-[#523122] uppercase">
              the corner
            </h1>
          </div>
          <p className="font-inter text-sm pt-8 font-semibold text-[#FAEADE]">
            Buy our drinks at your local store <br /> or get them delivered (to
            your door).
          </p>
          <div className="mt-5">
            <button className="bg-[#E2A458] cursor-pointer uppercase px-10 py-3 h1-color font-Antonio font-extrabold rounded-4xl">
              Get it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
