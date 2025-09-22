import React from "react";

const Product = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#E9DECD] -mt-44">
        <div className="pt-44 w-full h-full relative">
          <div className="w-full h-full flex items-center justify-center">
            <img src="/images/big-img.png" alt="" />
          </div>
          <div className="flex items-center justify-center flex-col absolute top-64 left-8 uppercase font-Antonio font-bold text-8xl">
            <h1 className="h1-color">It still does</h1>
            <div className="p-2 bg-[#E9DECD] -rotate-3">
              <div className="bg-[#A16833] px-8 py-6">
                <h1 className="text-[#E2D4BC]">body good</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
