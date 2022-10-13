import React, { useEffect } from "react";
import HelpPosts from "../HelpPosts/HelpPosts/HelpPosts";
import HomeBanners from "../HomeBanners/HomeBanners/HomeBanners";
import HomeShopItems from "../HomeShopItems/HomeShopItems/HomeShopItems";
import Reviews from "../Reviews/Reviews/Reviews";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectStatus } from "../../../../redux/allNaturalProductSlice";


const Home = () => {

  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  console.log("STATUS---->", status)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Naturals: Best Organic Food Store in Bangladesh</title>
      </Helmet>
      <HomeBanners />
      <HomeShopItems />
      <Reviews />
      <HelpPosts />

    </HelmetProvider>
  );
};

export default Home;
