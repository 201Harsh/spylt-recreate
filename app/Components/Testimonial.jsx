import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="h-screen bg-[#FAEADE] font-Antonio relative overflow-hidden">
        <div className="h-full w-full flex flex-col leading-60 items-center justify-center">
          <h1 className="text-[17vw] text-[#222123] uppercase font-bold">
            What's
          </h1>
          <h1 className="text-[17vw] text-[#E2A458] uppercase font-bold">
            Everyone
          </h1>
          <h1 className="text-[17vw] text-[#222123] uppercase font-bold">
            Talking
          </h1>
        </div>

        {/* Testimonal Video Section */}

        <div className="h-[60%] w-1/4 absolute top-1/3 left-5 z-0 -rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-52 z-10 rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-1/4 z-10 -rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-1/3 z-10 rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-1/2 z-20 -rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-2/3 z-20 rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-3/4 z-20 -rotate-6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f7.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="w-full h-24 absolute bottom-0 pt-14 left-[45%] z-30">
          <button className="bg-[#E2A458] cursor-pointer uppercase px-8 py-2 h1-color font-Antonio font-bold rounded-4xl">
            Explore All
          </button>
        </div>
      </div>
      <img src="/images/footer-dip.png" alt="drip" />
    </>
  );
};

export default Testimonial;
