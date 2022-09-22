import React from "react";
import ShopItems from "../ShopItems/ShopItems";
import HelpPosts from "./HelpPosts/HelpPosts/HelpPosts";
import HomeBanners from "./HomeBanners/HomeBanners/HomeBanners";
import Reviews from "./Reviews/Reviews/Reviews";


const Home = () => {

  return (
    <div>
      <HomeBanners />
      {/* <ShopItems /> */}
      <Reviews />
      <HelpPosts />
    </div>
  );
};

export default Home;
