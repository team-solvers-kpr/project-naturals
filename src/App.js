import React from "react";
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Navbar from "./components/shared/NavBar/Navbar";
import Pearl from "./components/pages/Pearl/Pearl/Pearl";
import Footer from "./components/shared/Footer/Footer";
import { useLayoutEffect } from "react";
import FindStore from "./components/pages/Find_Store/FindStore";
import BecomeAWholesaler from "./components/pages/Become_A_Wholesaler/BecomeAWholesaler";


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pearl" element={<Pearl />} />
        <Route path="/store" element={<FindStore />} />
        <Route path="/becomeawholesaler" element={<BecomeAWholesaler />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
