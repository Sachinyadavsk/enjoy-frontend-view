// admin-dashboard/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = ({ open }) => {
    return (
        <div className="border-r border-gray-200 rounded-2xl shadow hover:shadow-lg transition"
            style={{
                width: open ? "220px" : "60px",
                height: "100vh",
                background: "#ffffff",
                color: "#333",
                transition: "0.3s",
                overflow: "hidden",
            }}
        >
            <h3 className="font-bold rounded-2xl border-gray-950 hover:text-cyan-600" style={{ padding: "10px" }}>
                {open ? "Users Panel" : "AP"}
            </h3>

            <nav className=""  style={{ display: "flex", flexDirection: "column" }}>
                <Link to="/" style={link}>Dashboard</Link>
                <Link to="/profile" style={link}>Profile</Link>
                <Link to="/posts" style={link}>Posts</Link>
            </nav>
        </div>
    );
};

const link = {
    padding: "12px",
    color: "black;",
    textDecoration: "none",
};

export default Sidebar;