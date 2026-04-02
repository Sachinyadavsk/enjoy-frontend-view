import React from 'react'
import Navbar from './component/layout/Navbar';
import { Routes, Route } from "react-router-dom";
import Shop from './component/pages/shop';
import Home from './component/pages/Home';
import Categories from './component/pages/Categories';
import Deals from './component/pages/Deals'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/deals" element={<Deals/>} />
      </Routes>
    </div>
  )
}

export default App
