import React from "react";
import Hero from "./Components/Hero";
import Message from "./Components/Message";
import ShowCase from "./Components/ShowCase";
import Product from "./Components/Product";
import Features from "./Components/Features";
import Testimonial from "./Components/Testimonial";
import PreFooter from "./Components/PreFooter";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Message />
      <ShowCase />
      <Product />
      <Features />
      <Testimonial />
      <PreFooter />
      <Footer />
    </>
  );
};

export default page;
