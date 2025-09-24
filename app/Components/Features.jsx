import React from "react";
import Video from "./Video";

const Features = () => {
  return (
    <div className="w-full bg-[#222123] mt-14 relative z-20">
      <div className="h-full w-full flex items-center justify-center relative">
        <div className="h-full pt-24">
          <p className="font-inter h1-2color text-center font-semibold text-sm">
            Unlock the Advantages: <br /> Explore the Key Benefits of Choosing
            SPYLT
          </p>
          <div className="mt-4 h-full relative flex flex-col items-center pt-10">
            <div className="bg-[#222123] p-2 rotate-3 relative z-10 w-2/3">
              <div className="bg-[#C88E64] px-8 py-4 flex items-center justify-center">
                <h1 className="text-8xl font-Antonio font-bold text-[#FAEADE] uppercase">
                  Shelf stable
                </h1>
              </div>
            </div>
            <div className="-translate-y-4 -rotate-1 p-2">
              <div className="bg-[#FAEADE]  px-8 py-4 flex items-center justify-center">
                <h1 className="text-8xl font-Antonio font-bold text-[#222123] uppercase">
                  Protein + Caffeine
                </h1>
              </div>
            </div>
            <div className="bg-[#222123] p-2 rotate-1 -translate-y-7 relative z-10">
              <div className="bg-[#7F3B2D] px-8 py-4 flex items-center justify-center">
                <h1 className="text-8xl font-Antonio font-bold text-[#FAEADE] uppercase">
                  Infinitely recyclable
                </h1>
              </div>
            </div>
            <div className="bg-[#222123] p-2 relative z-1 -translate-y-8 -rotate-6">
              <div className="bg-[#E8C66D] px-8 py-4 flex items-center justify-center">
                <h1 className="text-8xl font-Antonio font-bold text-[#222123] uppercase">
                  Lactose free
                </h1>
              </div>
            </div>
          </div>
          <p className="font-inter h1-2color text-center font-extralight text-sm">
            And much more...
          </p>
        </div>
      </div>
      <Video />
    </div>
  );
};

export default Features;
