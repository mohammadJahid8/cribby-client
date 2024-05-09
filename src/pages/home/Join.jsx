import { IoMdSend } from "react-icons/io";

const Join = () => {
  return (
    <div className="py-20 w-full overflow-hidden">
      <div className="w-11/12 md:w-10/12 lg:w-[1100px] mx-auto flex justify-center items-start flex-col space-y-8 mb:space-y-16">
        <h1 className="hero-title bg-gradient-to-r from-secondary to-neutral pb-4">
          <span className="text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[4rem] md:leading-[8rem] lg:leading-[8rem]">
            Join the
          </span>
          <br />
          <span className="text-[4rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] leading-[4rem] md:leading-[8rem] lg:leading-[10rem] xl:leading-[12rem]">
            Cribby.io Community
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-0">
          <div className="space-y-8 md:pe-36 md:border-e md:border-pink">
            <div className="space-y-4">
              <h4 className="text-primary text-2xl font-medium">
                Stay Connected with the Cribby Ecosystem
              </h4>
              <p className="">
                Sign up to receive updates on exciting new features, major
                developments, and exclusive offers within the Cribby platform.
              </p>
            </div>
            <form className="flex p-3  border border-primary rounded-full">
              <input
                type="text"
                className="input-primary bg-transparent w-full text-primary focus:outline-none "
                placeholder="Enter your email"
              />
              <button className="p-2 bg-primary rounded-full">
                <IoMdSend className="size-6 text-white" />
              </button>
            </form>
          </div>
          <div className="space-y-8 md:ps-36">
            <div className="space-y-4">
              <h4 className="text-primary text-2xl font-medium">
                Explore the Cribby App
              </h4>
              <p className="">
                Experience the sleek Cribby App on mobile or web. Uncover
                extraordinary features, enjoy secure and transparent bookings,
                and effortlessly tap into exclusive deals.
              </p>
            </div>
            <div>
              <button className="p-btn rounded-full">Quick Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
