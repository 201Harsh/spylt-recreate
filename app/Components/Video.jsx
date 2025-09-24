"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  useGSAP(() => {
    gsap.to(".vid-pin", {
      zIndex: 50,
      delay: 0.5,
      duration: 0.6,
      ease: "slow(0.1,0.1,false)",
      height: "100vh",
      width: "100%",
      scrollTrigger: {
        trigger: ".video-div",
        start: "center center",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div className="h-screen w-full mt-44 relative z-[10] video-div">
      <div className="flex items-center justify-center p-4 relative overflow-hidden h-full w-full max-w-screen">
        <video
          autoPlay
          muted
          loop
          className="h-24 w-24 object-cover absolute z-0 vid-pin"
        >
          <source src="/videos/pin-video.mp4" type="video/mp4" />
        </video>
        <div className="bg-gray-900/10 backdrop-blur p-14 rounded-full">
          <img
            src="/images/circle-text.svg"
            alt="play"
            className="w-full h-full absolute top-0 left-0"
          />
          <img src="/images/play.svg" alt="play" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Video;
