import React from "react";

const Hero = () => {
  return (
    <>
      {/* Header */}
      <div className="fixed z-50 w-full backdrop-blur-xl px-10 py-8 bg-red-200 flex justify-between items-center">
        <h1>Spylt</h1>
        <h1>Menu</h1>
        <h1>Store</h1>
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
          <div className="h-1/2 w-1/2 bg-red-200">
            <h1 className="text-9xl w-full font-bold font-Antonio">
              Freaking Delicious
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
