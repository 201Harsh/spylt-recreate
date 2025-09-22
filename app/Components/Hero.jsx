import React from "react";

const Hero = () => {
  return (
    <>
      {/* Header */}
      <div className="fixed z-50 w-full px-10 py-3 flex justify-between items-center">
        <div>
          <img src="images/nav-logo.svg" alt="logo" />
        </div>
        <div>
          <h1>Menu</h1>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#E2A458] cursor-pointer uppercase px-8 py-2 h1-color font-Antonio font-bold rounded-4xl">
            Find in store
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="h-screen w-full relative">
        <video
          autoPlay
          playsInline
          muted
          className="h-full w-full object-cover absolute"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="h-full w-full absolute z-10 flex items-center justify-center">
          <div className="w-1/2">
            <div className="animatedLetters">
              <h1 className="text-8xl uppercase font-extrabold h1-color text-center font-Antonio whitespace-nowrap">
                Freaking Delicious
              </h1>
            </div>
            <div className="bg-[#F9E6D6] p-2 mt-1 -rotate-3">
              <div className="animatedDiv flex items-center justify-center h1-bg-color px-6 py-6">
                <h1 className="text-8xl uppercase font-extrabold h1-2color text-center font-Antonio whitespace-nowrap">
                  Protein + Caffeine
                </h1>
              </div>
            </div>
          <div className="flex justify-center">
              <p className="text-[1.04vw] w-2/3 font-semibold leading-tight text-[#7A5C4E] text-center font-inter mt-10">
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid with every deliciously smooth chug.
            </p>
          </div>
            <div className="flex justify-center">
              <button className="bg-[#E2A458] uppercase px-14 py-4 h1-color font-Antonio font-extrabold rounded-3xl mt-10">
                Chug a spylt
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
