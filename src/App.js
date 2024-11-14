import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Container/header/Header.jsx";
import Footer from './Container/footer/Footer.jsx';
import Home from './pages/home';
import ItemProject from './Container/itemProject/ItemProject.jsx'; 
import './App.css';

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ItemProject />} /> 
      </Routes>
      <Footer />
    </main>
  );
}



