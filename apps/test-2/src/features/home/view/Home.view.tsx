import HomeAboutSection from "../components/HomeAboutSection";
import HomeContactSection from "../components/HomeContactSection";
import HomeHeroSection from "../components/HomeHeroSection";
import HomePricingSection from "../components/HomePricingSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <div className="container">
        <HomeAboutSection />
        <HomePricingSection />
        <HomeContactSection />
      </div>
    </>
  );
};

export default Home;
