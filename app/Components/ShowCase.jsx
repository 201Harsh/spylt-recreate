import React from "react";

const ShowCase = () => {
  return (
    <>
      <div className="h-screen w-full whitespace-nowrap bg-[#FAEADE] flex items-center justify-center relative">
        <div className="flex items-center justify-evenly h-full w-full overflow-x-hidden ">
          {/* Text Section */}
          <div className="flex w-1/2 flex-col items-center justify-center uppercase text-8xl font-Antonio font-bold">
            <h1 className="h1-color">We have 6</h1>
            <div className="bg-[#FAEADE] -rotate-3 p-2">
              <div className="bg-[#A16833] py-4 px-4">
                <h1 className="text-[#FAEADE]">freaking</h1>
              </div>
            </div>
            <h1 className="h1-color">delicious flavors</h1>
          </div>

          {/* Image Section */}

          <div className="flex justify-center items-center w-1/2 relative">
            <div className="flex gap-40 whitespace-nowrap w-full">
              {/* slider 1 */}
              <div className="min-w-full h-full overflow-x-hidden -rotate-6">
                <img
                  src="/images/brown-bg.svg"
                  alt="showcase"
                  className="object-cover"
                />
                <img
                  src="/images/brown-elements.webp"
                  alt="elem"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <img
                  src="/images/brown-drink.webp"
                  alt="item"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <h1 className="text-5xl uppercase text-[#FAEADE] font-bold font-Antonio absolute z-20 bottom-8 left-8">
                  Chocolate Milk
                </h1>
              </div>

              {/* slider 2 */}
              <div className="min-w-full h-full overflow-x-hidden rotate-6">
                <img
                  src="/images/red-bg.svg"
                  alt="showcase"
                  className="object-cover"
                />
                <img
                  src="/images/red-elements.webp"
                  alt="elem"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <img
                  src="/images/red-drink.webp"
                  alt="item"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <h1 className="text-5xl uppercase text-[#FAEADE] font-bold font-Antonio absolute z-20 bottom-8 left-8">
                  Strawberry Milk
                </h1>
              </div>
              {/* slider3 */}
              <div className="min-w-full h-full overflow-x-hidden -rotate-6">
                <img
                  src="/images/blue-bg.svg"
                  alt="showcase"
                  className="object-cover"
                />
                <img
                  src="/images/blue-elements.webp"
                  alt="elem"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <img
                  src="/images/blue-drink.webp"
                  alt="item"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <h1 className="text-5xl uppercase text-[#FAEADE] font-bold font-Antonio absolute z-20 bottom-8 left-8">
                  Cookies & Cream
                </h1>
              </div>
              {/* slider4 */}
              <div className="min-w-full h-full overflow-x-hidden rotate-6">
                <img
                  src="/images/orange-bg.svg"
                  alt="showcase"
                  className="object-cover"
                />
                <img
                  src="/images/orange-elements.webp"
                  alt="elem"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <img
                  src="/images/orange-drink.webp"
                  alt="item"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <h1 className="text-5xl uppercase text-[#FAEADE] font-bold font-Antonio absolute z-20 bottom-8 left-8">
                  PeanutButter Chocolate
                </h1>
              </div>

              {/* slider5 */}
              <div className="min-w-full h-full overflow-x-hidden -rotate-6">
                <img
                  src="/images/white-bg.svg"
                  alt="showcase"
                  className="object-cover"
                />
                <img
                  src="/images/white-elements.webp"
                  alt="elem"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <img
                  src="/images/white-drink.webp"
                  alt="item"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <h1 className="text-5xl uppercase text-[#FAEADE] font-bold font-Antonio absolute z-20 bottom-8 left-8">
                  Vanilla Milk
                </h1>
              </div>

              {/* slider 6 */}
              <div className="min-w-full h-full overflow-x-hidden rotate-6">
                <img
                  src="/images/black-bg.svg"
                  alt="showcase"
                  className="object-cover"
                />
                <img
                  src="/images/black-elements.webp"
                  alt="elem"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <img
                  src="/images/black-drink.webp"
                  alt="item"
                  className="object-contain w-full h-full absolute z-10 top-0 left-0"
                />
                <h1 className="text-5xl uppercase text-[#FAEADE] font-bold font-Antonio absolute z-20 bottom-8 left-8">
                  max Chocolate Milk
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-50 px-10 py-2 bottom-5 left-1/2 -translate-x-1/2">
          <button className="bg-[#E2A458] cursor-pointer uppercase px-14 py-4 h1-color font-Antonio font-extrabold rounded-4xl">
            Get it now
          </button>
        </div>
      </div>
      <img src="/images/slider-dip.png" alt="" />
    </>
  );
};

export default ShowCase;
