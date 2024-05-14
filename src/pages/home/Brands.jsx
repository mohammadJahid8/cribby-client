import etherscan from "../../assets/logos/etherscan.svg";
import uniswap from "../../assets/logos/uniswap.png";
import coinmarketcap from "../../assets/logos/coinmarketcap.png";
import coingecko from "../../assets/logos/coingecko.png";

const Brands = () => {
  return (
    <div className="w-full py-5">
      <div className="flex items-center text-2xl font-bold justify-center md:justify-between flex-wrap gap-6 md:gap-10 w-11/12 md:w-10/12 lg:w-[1100px] mx-auto">
        <a className="" href="">
          <img className="h-10" src={etherscan} alt="" />
        </a>
        <a className="" href="">
          <img className="h-10" src={uniswap} alt="" />
        </a>
        <a className="" href="">
          <img className="h-10" src={coinmarketcap} alt="" />
        </a>
        <a className="" href="">
          <img className="h-10" src={coingecko} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Brands;
