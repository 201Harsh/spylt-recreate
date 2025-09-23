import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-50 max-w-screen w-full md:px-10 px-4 py-3 flex justify-between items-center">
      <div>
        <img src="images/nav-logo.svg" alt="logo" />
      </div>
      <div className="hidden">
        <h1>Menu</h1>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#E2A458] cursor-pointer uppercase px-8 py-2 h1-color font-Antonio font-bold rounded-4xl">
          Find in store
        </button>
      </div>
    </div>
  );
};

export default Navbar;
