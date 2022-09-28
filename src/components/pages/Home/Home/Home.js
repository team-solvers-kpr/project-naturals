import React from "react";
import HelpPosts from "../HelpPosts/HelpPosts/HelpPosts";
import HomeBanners from "../HomeBanners/HomeBanners/HomeBanners";
import HomeShopItems from "../HomeShopItems/HomeShopItems/HomeShopItems";
import Reviews from "../Reviews/Reviews/Reviews";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Naturals || Home</title>
      </Helmet>
      <HomeBanners />
      <HomeShopItems />
      <Reviews />
      <HelpPosts />

    </HelmetProvider>
  );
};

export default Home;
