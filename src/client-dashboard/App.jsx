import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MyPosts from "./pages/MyPosts";
import Layout from "./components/Layout";

const ClientApp = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/posts" element={<MyPosts />} />
                </Routes>
            </Layout>

        </>
    );
};

export default ClientApp;