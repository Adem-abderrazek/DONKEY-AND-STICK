import React from "react";
import video from "../../assets/bg.mp4";
import "./Hero.css"; // Import the CSS file for animations

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="h-screen relative z-10 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4">
          TABLE, DONKEY AND STICK
        </h1>
        <p className="hero-subtitle text-lg md:text-xl mt-4">
          Crusty Bread, Brandy, Fire
        </p>
      </div>
    </div>
  );
};

export default Hero;
