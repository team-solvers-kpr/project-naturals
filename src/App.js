import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from "./components/shared/NavBar/Navbar";
import Pearl from "./components/pages/Pearl/Pearl/Pearl";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pearl" element={<Pearl />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
