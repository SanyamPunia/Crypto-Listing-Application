import Head from "next/head";
import React, { useState } from "react";
import CoinList from "../components/CoinList";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";

export default function Home({ coins }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // get current coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="text-center">
      <Head>
        <title>Crypto Listing App</title>
      </Head>

      <Hero />
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={coins.length}
        paginate={paginate}
      />

      <div className="container mx-auto mt-10">
        <input
          className="border-2 dark:focus:border-textListPrimary transition border-textSecondary dark:border-backgroundSecondary bg-white h-10 px-5 rounded-lg text-md focus:outline-none"
          type="search"
          name="search"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <CoinList
        searchTerm={searchTerm}
        coins={currentCoins}
        pageNumber={currentPage}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const endpointUrl = "https://jsonkeeper.com/b/VE7I";
  const response = await fetch(endpointUrl);

  if (!response.ok) {
    const error = response.status;
    return Promise.reject(error);
  }

  const coins = await response.json();

  return {
    props: {
      coins: coins,
    },
  };
};