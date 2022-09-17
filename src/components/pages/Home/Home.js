import React from "react";
import ShopItems from "../ShopItems/ShopItems";
import HelpPosts from "./HelpPosts/HelpPosts/HelpPosts";
import Reviews from "./Reviews/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <ShopItems/>
      <Reviews />
      <HelpPosts />
    </div>
  );
};

export default Home;
