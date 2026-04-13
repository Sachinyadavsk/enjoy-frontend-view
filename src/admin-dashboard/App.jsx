// admin-dashboard/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import Ads from "./pages/Ads";
import Gallery from "./pages/Gallery";
import Pages from "./pages/Pages";
import Slider from "./pages/Slider";

const AdminApp = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </Layout>
  );
};

export default AdminApp;