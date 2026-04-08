import React from 'react'
import Navbar from './component/layout/Navbar';
import { Routes, Route } from "react-router-dom";
import Shop from './component/pages/shop';
import Home from './component/pages/Home';
import Categories from './component/pages/Categories';
import Deals from './component/pages/Deals';
import ClientApp from "./client-dashboard/App";
import AdminApp from "./admin-dashboard/App";
import ProtectedRoute from "./shared/ProtectedRoute";
import AdminRoute from "./shared/AdminRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deals" element={<Deals />} />
        {/* Client */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <ClientApp />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminApp />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
