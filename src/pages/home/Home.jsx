import BestOfAllWorlds from "./BestOfAllWorlds";
import Brands from "./Brands";
import GovernedBy from "./GovernedBy";
import Hero from "./Hero";
import Join from "./Join";
import Orbit from "./Orbit";
import Introducing from "./Introducing";
import Tokenomics from "./Tokenomics";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <BestOfAllWorlds />
      <Join />
      <Introducing />
      {/* <Orbit /> */}
      <Tokenomics />
      <GovernedBy />
    </div>
  );
};

export default Home;
