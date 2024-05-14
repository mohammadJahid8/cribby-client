import hero from "../../assets/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full py-20">
      <div className="min-h-screen w-11/12 md:w-10/12 lg:w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="w-10/12 md:w-full">
          <Lottie className="z-0" loop={true} animationData={hero} />
          {/* <video autoPlay loop muted>
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="space-y-4 ">
          <h2 className="hero-title text-6xl md:text-[5rem] lg:text-[5.2rem] font-semibold bg-gradient-to-r from-secondary to-neutral">
            Connected <br /> Reliable <br /> Innovative <br /> Blockchain.
          </h2>
          <p className="text-xl md:text-3xl text-secondary">
            Blockchain-Driven Property Rentals
          </p>
          <button className="p-btn rounded-full text-sm block md:hidden">
            Cribby Web App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
