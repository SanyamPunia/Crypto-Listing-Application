import React from "react";

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto flex flex-wrap gap-2 text-lg text-backgroundSecondary dark:text-textPrimary sm:px-10">
      {pageNumbers.map((number) => (
        <p className="my-2" key={number}>
          <a
            className="p-2 underline cursor-pointer transition hover:text-textSecondary"
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Pagination;
