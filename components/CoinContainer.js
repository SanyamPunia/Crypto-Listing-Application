import Link from "next/link";
import React from "react";

const CoinContainer = ({ coin }) => {
  return (
    <div className="dark:border w-full rounded p-4 font-raleway text-borderPrimary dark:text-[#D6D6D6] bg-backgroundSecondaryLight dark:bg-backgroundSecondary dark:border-borderPrimary shadow-md hover:shadow-2xl dark:hover:bg-[#303030] dark:hover:border-t-textList transition cursor-default">
      <div className="boxLayout">
        <h1 className="font-bold">Rank</h1>
        <p className="font-source">{coin.rank}</p>
      </div>
      <div className="boxLayout">
        <h1 className="font-bold">Name</h1>
        <p>{coin.name}</p>
      </div>
      <div className="boxLayout">
        <h1 className="font-bold">Full Name</h1>
        <p>{coin.fullName}</p>
      </div>
      <div className="boxLayout">
        <h1 className="font-bold">Price</h1>
        <p className="font-source">{coin.price}</p>
      </div>

      <hr className="mt-6 w-10 mx-auto text-borderPrimary " />

      <div className="mt-6 bg-textList w-fit px-2 py-0.5 rounded-lg transition hover:bg-textListPrimary active:bg-textListSecondary">
        <button className="font-bold text-textPrimary">
          <Link
            href={{
              pathname: `/` + coin.name.toLowerCase(),
              query: {
                id: coin.id,
                name: coin.name,
              },
            }}
          >
            <a>View More</a>
          </Link>
        </button>
      </div>

      <div className="mt-3 flex gap-2">
        {coin.tags.map((tag, i) => (
          <p
            className="font-source bg-textPrimary dark:bg-backgroundPrimary rounded"
            key={i}
          >
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CoinContainer;
