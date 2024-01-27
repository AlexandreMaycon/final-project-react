import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Home from './layouts/home/Home';
import Login from './Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
