import React from "react";

const Message = () => {
  return (
    <div className="bg-[#7F3B2D] w-full">
      <div className="w-3/4 mx-auto">
        <div className="msg-wrapper py-24 relative flex flex-col items-center justify-center font-Antonio uppercase font-bold text-[#FAEADE]">
          <h1 className="first-message text-8xl text-center">Stir up your <br /> fearless past and</h1>

         <div className="bg-[#7F3B2D] p-2 rotate-3 absolute z-10 -translate-y-14">
             <div className="bg-[#E2A458] md:pb-5 pb-3 px-5">
            <h2 className="text-[#7F3B2D] text-8xl">Fuel Up</h2>
          </div>
         </div>

          <h1 className="second-message text-8xl text-center pt-18">
            your future with every gulp of Perfect Protein
          </h1>

          <div className="flex items-center justify-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex items-center justify-center overflow-hidden">
              <p className="text-xs font-inter font-semibold text-center">
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
