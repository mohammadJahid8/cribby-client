import Lottie from "lottie-react";
import Icon1V2 from "../../assets/Icon1V2.json";
import Icon2V2 from "../../assets/Icon2V2.json";
import Icon3V2 from "../../assets/Icon3V2.json";
import Icon4V2 from "../../assets/Icon4V2.json";

const Tokenomics = () => {
  return (
    <div className="mt-20">
      <div className="py-20  bg-gradient-to-b from-neutral to-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="md:w-8/12 w-10/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-4xl md:text-6xl md:leading-[5rem] tracking-wide">
            Cribby Tokenomics
          </h2>
        </div>
        {/* <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex justify-center items-center">
          <Lottie className="w-full md:w-6/12" animationData={ocean} />
        </div> */}
      </div>
      <div className="py-20 bg-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className=" w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="rounded-3xl">
                <Lottie className="" animationData={Icon1V2} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Robust Revenue Sharing Model
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Invest in a platform where every transaction contributes to
                  your returns. Our tiered NFT system allows investors to earn a
                  percentage of the revenue generated from bookings, scaled by
                  the level of their investment.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="rounded-3xl">
                <Lottie className="" animationData={Icon2V2} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  First-Mover Advantage in Blockchain Travel
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Capitalize on the early adoption of blockchain technology in
                  the travel industry. Cribby leads with pioneering solutions
                  that integrate decentralized finance (DeFi) and non-fungible
                  tokens (NFTs) to reshape how we think about travel and
                  property rentals.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="rounded-3xl">
                <Lottie className="" animationData={Icon3V2} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Token Value Growth Potential
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Benefit from Cribby tokens, crafted to appreciate in value as
                  the platform expands and user demand surges. Our economic
                  strategy includes strategic token burning to reduce supply,
                  enhancing long-term token value.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className="rounded-3xl">
                <Lottie className="" animationData={Icon4V2} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Exclusive Investor Perks
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Gain access to exclusive perks such as premium listings,
                  special booking discounts, and first access to new properties
                  and features. These benefits not only enhance the investor
                  experience but also incentivize long-term holding and
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
