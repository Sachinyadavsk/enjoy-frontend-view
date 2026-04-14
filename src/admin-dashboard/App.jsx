// admin-dashboard/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Posts from "./pages/posts/Posts";
import Category from "./pages/category/Category";
import SubCategory from "./pages/SubCategory";
import Ads from "./pages/Ads";
import Gallery from "./pages/Gallery";
import Pages from "./pages/Pages";
import Slider from "./pages/Slider";
import Profile from "./pages/Profile";
import AdsAdd from "./pages/AdsAdd";
import PostsAdd from "./pages/post/PostsAdd";
import PostEdit from "./pages/post/PostEdit";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/ads/add" element={<AdsAdd />} />
        <Route path="/posts/add" element={<PostsAdd />} />
        <Route path="/posts/edit" element={<PostEdit />} />
      </Routes>
    </Layout>
  );
};

export default AdminApp;