import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto mt-8 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-raleway font-bold text-backgroundSecondary dark:text-textPrimary text-center sm:text-6xl">
          Crypto <span className="text-textList">Listing</span> Application
        </h1>
        <p className="text-center text-textSecondary font-raleway">
          Made in Next.js and styled using Tailwind CSS
        </p>
      </div>
      <hr className="mt-16 w-16 text-textSecondary mx-auto" />
    </div>
  );
};

export default Hero;
