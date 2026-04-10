import React from 'react'
import Navbar from './component/layout/Navbar';
import { Routes, Route } from "react-router-dom";
import Register from './component/pages/Register';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Notifications from './component/pages/Notifications';
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notifications />} />
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
