import React from "react";

const Coin = ({ name, id, slug }) => {
  return (
    <div className="font-raleway text-center">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-textList text-center sm:text-6xl">
          {name}
        </h1>
        <h1 className="font-source">
          ID:{" "}
          <span className="bg-[#e2e2e2] dark:bg-backgroundSecondary rounded">
            {id}
          </span>
        </h1>
      </div>
      <hr className="my-10 w-16 text-textSecondary mx-auto" />
    </div>
  );
};

export default Coin;
