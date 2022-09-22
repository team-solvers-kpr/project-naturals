import React from "react";
import HelpPosts from "../HelpPosts/HelpPosts/HelpPosts";
import HomeBanners from "../HomeBanners/HomeBanners/HomeBanners";
import HomeShopItems from "../HomeShopItems/HomeShopItems/HomeShopItems";
import Reviews from "../Reviews/Reviews/Reviews";


const Home = () => {

  return (
    <div>
      <HomeBanners />
      <HomeShopItems />
      <Reviews />
      <HelpPosts />
    </div>
  );
};

export default Home;
