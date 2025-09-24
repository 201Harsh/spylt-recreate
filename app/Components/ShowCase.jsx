"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const productRefs = useRef([]);

  useLayoutEffect(() => {
  productRefs.current.forEach((el, i) => {
    if (!el) return;

    const handleMove = (e) => {
      const elem = el.querySelector(".elem");
      const prod = el.querySelector(".prod"); 

      if (elem) {
        gsap.to(elem, {
          x: (e.clientX - window.innerWidth / 2) / 40,
        });
      }

      if (prod) {
        gsap.to(prod, {
          y: (e.clientY - window.innerHeight / 2) / 10,
          x: (e.clientX - window.innerWidth / 2) / 10,
        });
      }
    };

    el.addEventListener("mousemove", handleMove);

    return () => el.removeEventListener("mousemove", handleMove);
  });
}, []);


  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return;

    // 🔥 Responsive scroll with matchMedia
    ScrollTrigger.matchMedia({
      // Desktop / large screens
      "(min-width: 1024px)": () => {
        const totalScroll =
          trackRef.current.scrollWidth - containerRef.current.offsetWidth;

        gsap.to(trackRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      },

      // Mobile / tablets
      "(max-width: 1023px)": () => {
        const totalScroll =
          trackRef.current.scrollWidth - containerRef.current.offsetWidth;

        gsap.to(trackRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "30% center",
            end: `+=${totalScroll}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      },
    });

    // ✅ Recalculate on resize
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    return () => window.removeEventListener("resize", refresh);
  }, []);

  return (
    <>
      {/* Horizontal scroll wrapper */}
      <div
        ref={containerRef}
        className="h-screen w-full overflow-hidden bg-[#FAEADE] relative flex items-center slider"
      >
        {/* Track that moves horizontally */}
        <div
          ref={trackRef}
          className="flex h-full items-center gap-10 sm:gap-20 px-5 sm:px-20"
          style={{ willChange: "transform" }}
        >
          {/* Left text block */}
          <div className="flex-shrink-0 w-[80vw] md:w-[50vw] flex flex-col items-center justify-center uppercase text-4xl sm:text-6xl md:text-8xl font-Antonio font-bold text-center">
            <h1 className="h1-color">We have 6</h1>
            <div className="bg-[#FAEADE] -rotate-3 p-1 sm:p-2 mt-2">
              <div className="bg-[#A16833] py-2 sm:py-4 px-3 sm:px-6">
                <h1 className="text-[#FAEADE]">freaking</h1>
              </div>
            </div>
            <h1 className="h1-color mt-2">delicious flavors</h1>
          </div>

          {/* Product Slides */}
          {[
            {
              bg: "brown-bg.svg",
              elements: "brown-elements.webp",
              drink: "brown-drink.webp",
              title: "Chocolate Milk",
              rotate: "-rotate-6",
            },
            {
              bg: "red-bg.svg",
              elements: "red-elements.webp",
              drink: "red-drink.webp",
              title: "Strawberry Milk",
              rotate: "rotate-6",
            },
            {
              bg: "blue-bg.svg",
              elements: "blue-elements.webp",
              drink: "blue-drink.webp",
              title: "Cookies & Cream",
              rotate: "-rotate-6",
            },
            {
              bg: "orange-bg.svg",
              elements: "orange-elements.webp",
              drink: "orange-drink.webp",
              title: "PeanutButter Chocolate",
              rotate: "rotate-6",
            },
            {
              bg: "white-bg.svg",
              elements: "white-elements.webp",
              drink: "white-drink.webp",
              title: "Vanilla Milk",
              rotate: "-rotate-6",
            },
            {
              bg: "black-bg.svg",
              elements: "black-elements.webp",
              drink: "black-drink.webp",
              title: "Max Chocolate Milk",
              rotate: "rotate-6",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (productRefs.current[i] = el)}
              className={`slide relative min-w-[85vw] sm:min-w-[70vw] h-[60vh] sm:h-[70vh] flex-shrink-0 ${item.rotate}`}
            >
              <img
                src={`/images/${item.bg}`}
                alt="showcase"
                className="w-full h-full object-cover rounded-4xl"
              />
              <img
                src={`/images/${item.elements}`}
                alt="elem"
                className="absolute top-0 left-0 w-full h-full object-contain z-10 prod"
              />
              <img
                src={`/images/${item.drink}`}
                alt="item"
                className="absolute top-0 left-0 w-full h-full object-contain z-20 elem"
              />
              <h1 className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-2xl sm:text-3xl md:text-5xl uppercase text-[#FAEADE] font-bold font-Antonio z-30">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Button overlay */}
        <div className="absolute z-50 px-5 sm:px-10 py-2 bottom-5 left-1/2 -translate-x-1/2">
          <button className="bg-[#E2A458] cursor-pointer uppercase px-8 sm:px-14 py-3 sm:py-4 h1-color font-Antonio font-extrabold rounded-3xl sm:rounded-4xl text-sm sm:text-base md:text-lg">
            Get it now
          </button>
        </div>
      </div>

      <img src="/images/slider-dip.png" alt="" className="w-full" />
    </>
  );
};

export default ShowCase;
