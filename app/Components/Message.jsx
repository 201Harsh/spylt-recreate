"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Message = () => {
  useGSAP(() => {
    // Split both texts
    const firstText = new SplitText(".first-message", { type: "words" });
    const secondText = new SplitText(".second-message", { type: "words" });
    const paraText = new SplitText(".ani-para", { type: "lines" });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-div",
        start: "center center",
        end: "+=300%", // keep pinned longer
        scrub: true,
        pin: true,
      },
    });

    // First message animation
    tl.to(firstText.words, {
      color: "#FAEADE",
      duration: 0.2,
      stagger: 0.7,
      ease: "power4.out",
    });

    tl.from(".ani-div", {
      x: -10,
      opacity: 0,
      ease: "slow(0.7,0.7,false)",
      delay: 0.02,
      duration: 0.3,
    });

    // Then second message animation
    tl.to(secondText.words, {
      color: "#FAEADE",
      duration: 0.5,
      stagger: 0.9,
      ease: "power4.out",
    }); // ">" makes it start after the first finishes

    tl.from(
      paraText.lines,
      {
        color: "#FAEADE",
        y: 100,
        duration: 0.5,
        opacity: 0,
        ease: "power4.out",
        stagger: 1,
      },
      ">"
    );
  });
  return (
    <div className="bg-[#7F3B2D] tranlate-y-[-100%] w-full msg-div">
      <div className="w-3/4 mx-auto">
        <div className="msg-wrapper py-24 relative flex flex-col items-center justify-center font-Antonio uppercase font-bold text-[#8C4F42]">
          <h1 className="first-message text-8xl text-center">
            Stir up your <br /> fearless past and
          </h1>

          <div className="bg-[#7F3B2D] p-2 rotate-3 absolute z-10 -translate-y-14 ani-div flex items-center justify-center">
            <div className="bg-[#E2A458] md:pb-5 pb-3 px-5">
              <h2 className="text-[#7F3B2D] text-8xl">Fuel Up</h2>
            </div>
          </div>

          <h1 className="second-message text-8xl text-center pt-18">
            your future with every gulp of Perfect Protein
          </h1>

          <div className="flex items-center justify-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex items-center justify-center overflow-hidden">
              <p className="text-xs font-inter text-[#FAEADE] font-semibold text-center ani-para">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
