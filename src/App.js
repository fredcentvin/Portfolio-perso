import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../src/Container/Header";
import Footer from '../src/Container/Footer';
import Home from './pages/home';
import ItemProject from '../src/Container/ItemProject'; 
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



