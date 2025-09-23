"use client"; // Important if using Next 13+ app directory

import React, { useEffect, useRef } from "react";
import Hero from "./Components/Hero";
import Message from "./Components/Message";
import ShowCase from "./Components/ShowCase";
import Product from "./Components/Product";
import Features from "./Components/Features";
import Testimonial from "./Components/Testimonial";
import PreFooter from "./Components/PreFooter";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import "locomotive-scroll/dist/locomotive-scroll.css";

const Page = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInstance;

    // Dynamically import to avoid SSR issues
    import("locomotive-scroll").then((LocomotiveScroll) => {
      scrollInstance = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        // optional settings: multiplier: 1, inertia: 0.8, etc.
      });
    });

    // Cleanup on unmount
    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Navbar />
      <Hero />
      <Message />
      <ShowCase />
      <Product />
      <Features />
      <Testimonial />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Page;
