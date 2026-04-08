import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Category from "./pages/Category";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar";

const AdminApp = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/category" element={<Category />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;