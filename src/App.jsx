import React from 'react'
import Navbar from './component/layout/Navbar';
import { Routes, Route, useLocation } from "react-router-dom";
import Register from './component/pages/Register';
import Home from './component/pages/Home';
import Login from './component/pages/Login.jsx';
import Notifications from './component/pages/Notifications';
import ClientApp from "./client-dashboard/App";
import AdminApp from "./admin-dashboard/App";
import ProtectedRoute from "./shared/ProtectedRoute.jsx";
import AdminRoute from "./shared/AdminRoute.jsx";

const App = () => {
  const location = useLocation();

  // Hide navbar on admin & dashboard
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/dashboard");
  return (
    <div>
      {!hideNavbar && <Navbar />}
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
