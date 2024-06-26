import space2 from "../../assets/space2.jpg";
import color from "../../assets/color.json";
import Lottie from "lottie-react";

const Introducing = () => {
  return (
    <div className="py-20 w-full relative">
      <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex justify-center items-start flex-col space-y-8 mb:space-y-16 ">
        <div className="w-full text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-medium">
            Introducing Cribby
          </h2>
          <p className="text-xl ">
            Discover Cribby NFTs across four tiers, each offering unique
            benefits and revenue-sharing opportunities, with Level 4 granting
            the highest rewards.
          </p>
        </div>
        <div className="grid grid-cols-11 md:grid-cols-8 md:px-20 relative">
          <div className="col-span-5 md:col-span-3 flex flex-col items-center z-10">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={space2} alt="" />
              <div className="space-y-4 p-2 md:p-5 rounded-2xl absolute bottom-5 left-5 right-5 bg-white">
                <h2 className="text-xs md:text-xl text-primary">
                  Cribby coins and NFTs
                </h2>
                <p className="text-sm hidden md:block">
                  Create your own tokens or port existing tokens onto Reef
                  chain.
                </p>
              </div>
            </div>
            <div className="bg-[#ffeae5] w-10/12 md:w-9/12">
              <Lottie animationData={color} />
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <img src={space2} alt="" />
              <div className="space-y-4 p-2 md:p-5 rounded-2xl absolute bottom-5 left-5 right-5 bg-white">
                <h2 className="text-xs md:text-xl text-primary">
                  Cribby coins and NFTs
                </h2>
                <p className="text-sm hidden md:block">
                  Create your own tokens or port existing tokens onto Reef
                  chain.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 relative flex justify-center items-center">
            <div className="absolute top-20 bg-[#ffeae5] w-[200%] md:w-[150%]">
              <Lottie animationData={color} />
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 flex flex-col items-center z-10">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={space2} alt="" />
              <div className="space-y-4 p-2 md:p-5 rounded-2xl absolute bottom-5 left-5 right-5 bg-white">
                <h2 className="text-xs md:text-xl text-primary">
                  Cribby coins and NFTs
                </h2>
                <p className="text-sm hidden md:block">
                  Create your own tokens or port existing tokens onto Reef
                  chain.
                </p>
              </div>
            </div>
            <div className="bg-[#ffeae5] w-10/12 md:w-9/12">
              <Lottie animationData={color} />
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <img src={space2} alt="" />
              <div className="space-y-4 p-2 md:p-5 rounded-2xl absolute bottom-5 left-5 right-5 bg-white">
                <h2 className="text-xs md:text-xl text-primary">
                  Cribby coins and NFTs
                </h2>
                <p className="text-sm hidden md:block">
                  Create your own tokens or port existing tokens onto Reef
                  chain.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="absolute top-[98%]  left-5 md:left-20 right-5  md:right-20 flex justify-center items-center bg-[#ffeae5]">
            <Lottie className="w-full !h-[300px]" animationData={road} />
          </div> */}
        </div>
      </div>
      {/* <div className="absolute w-full bottom-0 border-b border-dashed">
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-primary rounded-full px-4 py-2 "
          style={{ fontFamily: "Lobster, sans-serif" }}
        >
          Cribby.
        </h2>
      </div> */}
    </div>
  );
};

export default Introducing;
