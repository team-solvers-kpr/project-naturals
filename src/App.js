import React from "react";
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import Home from './components/pages/Home/Home/Home';
import Navbar from "./components/shared/NavBar/Navbar";
import Pearl from "./components/pages/Pearl/Pearl/Pearl";
import Footer from "./components/shared/Footer/Footer";
import FindStore from "./components/pages/Find_Store/FindStore";
import BecomeAWholesaler from "./components/pages/Become_A_Wholesaler/BecomeAWholesaler";
import HoneyAndDates from "./components/pages/All_Products/Honey_&_Dates/Honey_&_Dates/HoneyAndDates";
import FinestHerbs from "./components/pages/All_Products/Finest_Herbs/Finest_Herbs/FinestHerbs";
import EnergyEssentials from "./components/pages/All_Products/EnergyEssentials/EnergyEssentials/EnergyEssentials";
import HairAndSkinCares from "./components/pages/All_Products/Hair_&_SkinCares/Hair_&_SkinCares/HairAndSkinCares";
import NutAndSeeds from "./components/pages/All_Products/Nut_&_Seeds/Nut_&_Seeds/NutAndSeeds";
import PicklesAndSpices from "./components/pages/All_Products/Pickles_&_Spices/Pickles_&_Spices/PicklesAndSpices";
import Noboshoktis from "./components/pages/All_Products/Noboshoktis/Noboshoktis/Noboshoktis";
import GiftCombos from "./components/pages/All_Products/GiftCombos/GiftCombos/GiftCombos";
import OrganicOilAndGhees from "./components/pages/All_Products/Organic_Oil_&_Ghees/Organic_Oil_&_Ghees/OrganicOilAndGhees";
import Products from "./components/pages/All_Products/Products/Products/Products";
import SignUp from "./components/pages/Login_SignUp/SignUp/SignUp";
import Login from "./components/pages/Login_SignUp/Login/Login";
import ScrollToTop from "react-scroll-to-top";
import useFirebase from "./Hooks/useFirebase";
import AuthProvider from "./Context/AuthProvider";
import loadingImg from './assests/loading/1.gif'


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  const { user, loading } = useFirebase()
  if (loading) {
    return (
      <>
        <center >
          <img src={loadingImg} alt="" className='loading-gif' />
        </center>
      </>
    )
  }
  return (
    <AuthProvider>

      <Wrapper>
        <Navbar />
        <Routes>
          {user ? (<>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pearl" element={<Pearl />} />
            <Route path="/store" element={<FindStore />} />
            <Route path="/becomeawholesaler" element={<BecomeAWholesaler />} />
            <Route path="/products/Honey&Dates" element={<HoneyAndDates />} />
            <Route path="/products/FinestHerb" element={<FinestHerbs />} />
            <Route path="/products/Nut&Seeds" element={<NutAndSeeds />} />
            <Route path="/products/Pickles&Spices" element={<PicklesAndSpices />} />
            <Route path="/products/Noboshokti" element={<Noboshoktis />} />
            <Route path="/products/OrganicOil&Ghee" element={<OrganicOilAndGhees />} />
            <Route path="/products/GiftCombo" element={<GiftCombos />} />
            <Route path="/products/EnergyEssentials" element={<EnergyEssentials />} />
            <Route path="/products/Hair&SkinCare" element={<HairAndSkinCares />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>) :
            (<>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pearl" element={<Pearl />} />
              <Route path="/store" element={<FindStore />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/becomeawholesaler" element={<BecomeAWholesaler />} />
              <Route path="/products/Honey&Dates" element={<HoneyAndDates />} />
              <Route path="/products/FinestHerb" element={<FinestHerbs />} />
              <Route path="/products/Nut&Seeds" element={<NutAndSeeds />} />
              <Route path="/products/Pickles&Spices" element={<PicklesAndSpices />} />
              <Route path="/products/Noboshokti" element={<Noboshoktis />} />
              <Route path="/products/OrganicOil&Ghee" element={<OrganicOilAndGhees />} />
              <Route path="/products/GiftCombo" element={<GiftCombos />} />
              <Route path="/products/EnergyEssentials" element={<EnergyEssentials />} />
              <Route path="/products/Hair&SkinCare" element={<HairAndSkinCares />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>)}
        </Routes>
        <ScrollToTop color="#00a651" smooth viewBox="0 0 32 32"
          svgPath="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"
        />
        <Footer />
      </Wrapper>

    </AuthProvider>
  );
}

export default App;
