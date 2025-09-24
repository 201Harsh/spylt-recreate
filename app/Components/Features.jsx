import React from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinned-div",
        start: "85% 80%",
        end: "bottom 40%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.from(".para1", {
      y: 100,
      opacity: 0,
      ease: "slow.out",
      duration: 0.8,
    });

    tl.from(".div1-ani", {
      x: 100,
      opacity: 0,
      ease: "back.out(1.7)",
      duration: 1.2,
    });

    tl.from(".div2-ani", {
      x: 100,
      width: 0,
      opacity: 0,
      ease: "back.out(1.7)",
      duration: 1,
    });

    tl.from(".div3-ani", {
      x: 100,
      ease: "back.out(1.7)",
      duration: 0.8,
      opacity: 0,
    });

    tl.from(".div4-ani", {
      x: 100,
      ease: "back.out(1.7)",
      duration: 1.4,
      opacity: 0,
    });

    tl.from(".para2", {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      duration: 0.8,
    });
  });

  return (
    <>
      <div className="w-full h-screen bg-[#222123] relative z-30">
        <div className="h-full w-full flex items-center justify-center relative">
          <div className="h-full pt-24 pinned-div">
            <p className="font-inter h1-2color text-center font-semibold text-sm para1">
              Unlock the Advantages: <br /> Explore the Key Benefits of Choosing
              SPYLT
            </p>
            <div className="mt-4 h-full relative flex flex-col items-center pt-10">
              <div className="bg-[#222123] p-2 rotate-3 relative z-10 w-2/3 div1-ani">
                <div className="bg-[#C88E64] px-8 py-4 flex items-center justify-center">
                  <h1 className="text-8xl font-Antonio font-bold text-[#FAEADE] uppercase">
                    Shelf stable
                  </h1>
                </div>
              </div>
              <div className="-translate-y-4 -rotate-1 p-2 div2-ani">
                <div className="bg-[#FAEADE]  px-8 py-4 flex items-center justify-center">
                  <h1 className="text-8xl font-Antonio font-bold text-[#222123] uppercase">
                    Protein + Caffeine
                  </h1>
                </div>
              </div>
              <div className="bg-[#222123] p-2 rotate-1 -translate-y-7 relative z-10 div3-ani">
                <div className="bg-[#7F3B2D] px-8 py-4 flex items-center justify-center">
                  <h1 className="text-8xl font-Antonio font-bold text-[#FAEADE] uppercase">
                    Infinitely recyclable
                  </h1>
                </div>
              </div>
              <div className="bg-[#222123] p-2 relative z-1 -translate-y-8 -rotate-6 div4-ani">
                <div className="bg-[#E8C66D] px-8 py-4 flex items-center justify-center">
                  <h1 className="text-8xl font-Antonio font-bold text-[#222123] uppercase">
                    Lactose free
                  </h1>
                </div>
              </div>
              <p className="font-inter h1-2color text-center font-extralight text-sm para-last-ani para2">
                And much more...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
