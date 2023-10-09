
import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/FeaturedProduct/FeaturedProducts";
import HomeBanner from "../components/Home/HomeBanner";
import Services from "../components/Home/Services";

const Home = () => {
  return (
      <div>
        <HomeBanner></HomeBanner>
        <Services></Services>
        <FeaturedProducts></FeaturedProducts>
        <Categories></Categories>
      </div>
   
  );
};

export default Home;
