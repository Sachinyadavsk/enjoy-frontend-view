import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{ width: "200px", background: "#eee" }}>
            <h3>Admin</h3>
            <Link to="/admin">Dashboard</Link><br />
            <Link to="/admin/posts">Posts</Link><br />
            <Link to="/admin/category">Category</Link><br />
            <Link to="/admin/users">Users</Link>
        </div>
    )
}

export default Sidebar
