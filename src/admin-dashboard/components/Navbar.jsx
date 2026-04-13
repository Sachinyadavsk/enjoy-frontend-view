import { useNavigate } from "react-router-dom";

const Navbar = ({ toggle }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    return (
        <div
            style={{
                height: "60px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
        >
            <button onClick={toggle}>☰</button>
            <h3 className="text-xl font-bold">Admin Dashboard</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Navbar;