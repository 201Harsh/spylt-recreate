"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    let splitedText = SplitText.create(".animatedLetters h1", {
      type: "chars",
    });

    const tl = gsap.timeline();

    tl.from(splitedText.chars, {
      y: 100,
      delay: 0.9,
      duration: 0.8,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.05,
    });

    gsap.from(".animatedDiv", {
      x: 100,
      opacity: 0,
      ease: "slow(0.7,0.7,false)",
      width: 0,
      delay: 0.7,
      duration: 0.5,
    });

    const splitedpara = SplitText.create(".animatedpara p", {
      type: "words , lines",
    });

    tl.from(splitedpara.lines, {
      y: 100,
      duration: 0.8,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.07,
    });

    tl.from(".btn", {
      y: -100,
      duration: 0.5,
      opacity: 0,
      ease: "back.out(1.7)",
    });

    gsap.set(".vid-div", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0% 0% 0% 0%",
    });

    gsap.to(".vid-div", {
      clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
      borderRadius: "0% 0% 40% 10%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".vid-div",
        start: "10% top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

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
      <div className="h-screen w-full relative vid-div">
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
            <div className="bg-[#F9E6D6] p-2 mt-1 -rotate-3 animatedDiv">
              <div className="flex items-center justify-center h1-bg-color px-6 py-6 overflow-hidden">
                <h1 className="text-8xl uppercase font-extrabold h1-2color text-center font-Antonio whitespace-nowrap">
                  Protein + Caffeine
                </h1>
              </div>
            </div>
            <div className="flex justify-center animatedpara">
              <p className="text-[1.04vw] w-2/3 font-semibold leading-tight text-[#7A5C4E] text-center font-inter mt-10">
                Live life to the fullest with SPYLT: Shatter boredom and embrace
                your inner kid with every deliciously smooth chug.
              </p>
            </div>
            <div className="flex justify-center btn">
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
