import CoinContainer from "./CoinContainer";

const CoinList = ({ coins, pageNumber, searchTerm }) => {
  return (
    <div className="container mx-auto my-16">
      <p className="font-source text-textList font-bold text-xl mb-2 text-center">
        {pageNumber}
      </p>

      <div className="grid grid-cols-3 justify-items-center gap-4 lg:grid-cols-2 sm:grid-cols-1 sm:px-10">
        {coins?.filter((val) => {
          if(searchTerm == "") return val;
          else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((coin) => (
            <CoinContainer key={coin.id} coin={coin} />
          ))}
      </div>
    </div>
  );
};

export default CoinList;
