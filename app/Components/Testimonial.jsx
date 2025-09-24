"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testipin-div",
        start: "70% 70%",
        end: "+=3500",
        scrub: 5,
        pin: true,
        markers: true,
      },
    });

    const txt1 = SplitText.create(".txt-1", { type: "chars" });
    const txt2 = SplitText.create(".txt-2", { type: "chars" });
    const txt3 = SplitText.create(".txt-3", { type: "chars" });

    tl.to(txt1.chars, {
      x: 150,
      duration: 0.2,
      ease: "power1.out",
      stagger: 0.05,
    });

    tl.to(
      txt2.chars,
      {
        x: -150,
        duration: 0.2,
        ease: "power1.out",
        stagger: 0.05,
      },
      "<0.3"
    );

    tl.to(txt3.chars, {
      x: 150,
      duration: 0.2,
      ease: "power1.out",
      stagger: 0.05,
    });

    tl.from([".vid1", ".vid2", ".vid3", ".vid4", ".vid5", ".vid6", ".vid7"], {
      y: 1000,
      ease: "power1.out",
      stagger: 0.8,
      duration: 1.5,
    });
  });

  return (
    <>
      <div className="h-screen bg-[#FAEADE] font-Antonio relative overflow-hidden testipin-div">
        <div className="h-full w-full flex flex-col leading-60 items-center justify-center ani-h1s">
          <h1 className="text-[17vw] text-[#222123] uppercase font-bold txt-1">
            What's
          </h1>
          <h1 className="text-[17vw] text-[#E2A458] uppercase font-bold txt-2">
            Everyone
          </h1>
          <h1 className="text-[17vw] text-[#222123] uppercase font-bold txt-3">
            Talking
          </h1>
        </div>

        {/* Testimonal Video Section */}

        <div className="h-[60%] w-1/4 absolute top-1/3 left-5 z-0 -rotate-6 vid1">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-52 z-10 rotate-6 vid2">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-1/4 z-10 -rotate-6 vid3">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-1/3 z-10 rotate-6 vid4">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f4.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-1/2 z-20 -rotate-6 vid5">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-2/3 z-20 rotate-6 vid6">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover rounded-xl"
          >
            <source src="/videos/f6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-[60%] w-1/4 absolute top-1/3 left-3/4 z-20 -rotate-6 vid7">
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
