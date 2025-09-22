import React from "react";

const Message = () => {
  return (
    <div className="bg-[#7F3B2D] w-full">
      <div className="w-3/4 bg-green-200 mx-auto">
        <div className="msg-wrapper flex flex-col items-center justify-center font-Antonio uppercase">
          <h1 className="first-message text-9xl text-center">Stir up your fearless past and</h1>

          <div className="bg-[#E2A458] md:pb-5 pb-3 px-5">
            <h2 className="text-[#7F3B2D] text-9xl">Fuel Up</h2>
          </div>

          <h1 className="second-message text-9xl">
            your future with every gulp of Perfect Protein
          </h1>

          <div className="flex items-center justify-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex items-center justify-center overflow-hidden">
              <p className="text-9xl whitespace-nowrap">
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
