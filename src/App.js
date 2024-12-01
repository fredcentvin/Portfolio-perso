import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Container/header/Header.jsx";
import Footer from './Container/footer/Footer.jsx';
import Home from './pages/home';
import Apropos from './pages/apropos';
import Error from './pages/error.jsx'
import ItemProject from './Container/itemProject/ItemProject.jsx'; 
import NosServices from './Container/nosservices/Nosservices.jsx'; 
import './App.css';

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/projects" element={<ItemProject />} /> 
        <Route path="/nosservices" element={<NosServices />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  );
}



