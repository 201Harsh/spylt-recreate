import React from "react";

const Video = () => {
  return (
    <div className="h-screen w-full relative z-[-10] -mt-44">
      <video autoPlay muted loop className="h-full w-full object-cover">
        <source src="/videos/pin-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
