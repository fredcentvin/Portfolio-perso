import React from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "../src/Container/Header";
import Footer from '../src/Container/Footer';
import Home from './pages/home'
import './App.css';

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}


