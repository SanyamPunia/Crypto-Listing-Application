import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Coin from "../components/slug/Coin";
import ChartContainer from "../components/slug/ChartContainer";

const Slug = ({ graphData }) => {
  const router = useRouter();
  const data = router.query;

  const price = graphData.map((price) => price.price);
  const datetime = graphData.map((datetime) => datetime.datetime);

  return (
    <div className="container mx-auto mt-8 py-8">
      <Coin name={data.name} id={data.id} slug={data.slug} />
      {/* <h1 className="text-right font-source italic text-textSecondary mb-2 sm:text-center sm:mb-5">
        Auto-Refreshes after every 60 seconds
      </h1> */}

      <div className="sm:px-10">
        <ChartContainer price={price} datetime={datetime} />
      </div>
    </div>
  );
};

export default Slug;

export const getServerSideProps = async () => {
  const endpointUrl = "https://jsonkeeper.com/b/DB32";
  const response = await fetch(endpointUrl);

  if (!response.ok) {
    const error = response.status;
    return Promise.reject(error);
  }

  const graphData = await response.json();

  return {
    props: {
      graphData,
    },
  };
};
