import Lottie from "lottie-react";
import ocean from "../../assets/ocean.json";
import Travel1 from "../../assets/Travel1.json";
import Host from "../../assets/Host.json";
import Options from "../../assets/Options.json";
import Virtual from "../../assets/Virtual.json";
import Features from "./Features";

const GovernedBy = () => {
  return (
    <>
      <div className="py-20 bg-gradient-to-b from-neutral to-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="md:w-8/12 w-10/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-4xl md:text-6xl md:leading-[5rem] tracking-wide">
            Meet CribbyAI <br /> Your Personal Rental Assistant
          </h2>
          <p>
            Introducing CribbyAI, the latest feature of our platform that brings
            artificial intelligence to your property rental experience. CribbyAI
            is an integrated AI chatbot designed to make finding the perfect
            rental as easy as having a conversation. Just tell CribbyAI what you
            need—like accommodations for a family of five in Italy—and it will
            instantly provide you with tailored listings that meet your specific
            requests. With CribbyAI, you can simplify your search process, get
            answers quickly, and find the ideal property without the hassle.
            Experience a smarter way to rent with CribbyAI.
          </p>
        </div>
        <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex justify-center items-center">
          <Lottie className="w-full md:w-6/12" animationData={ocean} />
          {/* <video autoPlay loop muted className="w-80 h-80">
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
      <div className="py-20 bg-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className=" w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Travel1} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Travel Insights
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Gain valuable travel tips and local recommendations from
                  CribbyAI, enhancing your overall travel experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Host} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Host Tools
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Access a suite of tools designed for hosts to manage their
                  listings, interact with potential guests, and optimize their
                  rental offerings with AI-driven insights.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Options} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Eco-Friendly Options
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Explore environmentally friendly accommodations that are
                  highlighted by CribbyAI to support sustainable travel choices.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Virtual} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Virtual Tours (Coming Soon)
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Experience properties before you book with immersive 3D
                  virtual tours powered by CribbyAI, helping you feel confident
                  in your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary ">
        <Features />
      </div>
      <div className="py-20 bg-secondary  flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex justify-center items-start flex-col space-y-16">
          <h1 className="text-white">
            <span className="text-[4rem] md:text-[8rem] lg:text-[10rem] leading-[4.5rem] md:leading-[8rem] lg:leading-[10rem]">
              Join the
            </span>
            <br />
            <span className="text-[3.5rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] leading-[3.5rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[11rem]">
              CRIBBY Community
            </span>
          </h1>
          <div className="text-white flex flex-col md:flex-row items-start md:items-center  justify-start gap-10">
            <h3 className="text-2xl font-light">Explore the Cribby app</h3>
            <button className="p-btn rounded-full">Cribby.io Web App</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GovernedBy;
