import React from "react";

const Video = () => {
  return (
    <div className="h-screen w-full relative z-[-10]">
      <div className="flex items-center justify-center p-4 relative">
        <video autoPlay muted loop className="h-24 w-24 object-cover absolute z-0 vid-pin">
          <source src="/videos/pin-video.mp4" type="video/mp4" />
        </video>
        <div className="bg-gray-900/10 backdrop-blur p-14 rounded-full">
          <img
            src="/images/circle-text.svg"
            alt="play"
            className="w-full h-full absolute top-0 left-0"
          />
          <img src="/images/play.svg" alt="play" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Video;
