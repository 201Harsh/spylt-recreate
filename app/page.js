import React from "react";
import Hero from "./Components/Hero";
import Message from "./Components/Message";
import ShowCase from "./Components/ShowCase";
import Product from "./Components/Product";
import Features from "./Components/Features";

const page = () => {
  return (
    <>
      <Hero />
      <Message />
      <ShowCase />
      <Product />
      <Features />
    </>
  );
};

export default page;
