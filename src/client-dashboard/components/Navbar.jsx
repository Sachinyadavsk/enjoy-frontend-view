import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard/profile">Profile</Link>
                <Link to="/dashboard/posts">My Posts</Link>
            </nav>
        </div>
    )
}

export default Navbar
