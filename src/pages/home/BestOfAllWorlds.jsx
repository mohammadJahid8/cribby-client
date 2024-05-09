import Lottie from "lottie-react";
import circle from "../../assets/circle.json";
import secure from "../../assets/secure.json";
import Chatbot from "../../assets/Chatbot.json";
import Smart from "../../assets/Smart.json";
import Driven from "../../assets/Driven.json";

const BestOfAllWorlds = () => {
  return (
    <>
      <div className=" py-20 bg-gradient-to-b from-secondary via-neutral to-secondary flex justify-center items-center flex-col overflow-hidden space-y-12">
        <div className="w-11/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-medium">
            Best of all worlds
          </h2>
          <p className="text-xl ">
            Cribby is transforming property rentals with blockchain, making
            transactions clearer <br />
            and faster for a smoother renting experience worldwide.
          </p>
        </div>
        <div className="scrolling-text-container">
          <p className="scrolling-text text-5xl md:text-9xl font-medium text-secondary">
            Introduction to Cribby.com
          </p>
        </div>
        <div className="md:w-6/12 transform md:-translate-y-32 relative">
          <Lottie className="" animationData={circle} />
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white"
            style={{ fontFamily: "Lobster, sans-serif" }}
          >
            Cribby.
          </h2>
        </div>
      </div>
      <div className=" py-20 bg-secondary flex justify-center items-center flex-col overflow-hidden space-y-16">
        <div className="w-11/12 mx-auto text-white text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-medium">
            Introduction to Cribby
          </h2>
          <p className="text-xl ">
            Welcome to Cribby, where blockchain technology makes property
            rentals convenient and transparent for everyone.
            <br /> Discover a world of secure, efficient accommodations for both
            guests and hosts. <br />
            Experience the ease of renting with Cribby.
          </p>
        </div>
        <div className="min-h-screen w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex flex-col justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={secure} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Secure Transactions
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Enjoy peace of mind with blockchain-enhanced security
                  protocols that ensure all your transactions and personal
                  information are protected.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Chatbot} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  CribbyAI Chatbot
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Utilize our advanced AI-powered chatbot to receive instant,
                  personalized property recommendations based on your specific
                  needs and queries
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Smart} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  Smart Filters
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Leverage CribbyAI’s intelligent filtering to sort through
                  listings based on criteria like location, price range,
                  amenities, and more, making it easier to find your perfect
                  match.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-6/12 md:w-auto mx-auto">
              <div className=" rounded-box ">
                <Lottie className="" animationData={Driven} />
              </div>
              <div className="space-y-4 text-center md:text-start">
                <h3 className="text-pink text-xl md:text-2xl font-medium">
                  AI-Driven Features
                </h3>
                <p className="font-medium text-white tracking-wide text-sm md:text-base">
                  Discover the power of AI with features designed to enhance
                  your booking and stay experience. From predictive pricing
                  models to intelligent itinerary planning, CribbyAI makes every
                  aspect of your secure smarter and more connected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOfAllWorlds;
