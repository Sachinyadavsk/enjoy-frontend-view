import React, { useEffect, useState } from 'react';
import { ShoppingCart, User, Menu, X, Search, Bell } from "lucide-react";
import { Link } from 'react-router-dom';
import  {API_URL} from '../setliveurl.js'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    // Fetch menu from API
    useEffect(() => {
        fetch(`${API_URL}/categoriesmenu`)
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
            })
            .catch(err => console.error("Menu API Error:", err));
    }, []);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        EnjoyVS
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.slice(0, 4).map((item, index) => (
                            <Link key={index} to={item.slug} className="hover:text-blue-600">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* Search Bar */}
                    <div className="hidden md:flex items-center border rounded-lg px-2 py-1 w-1/3">
                        <Search size={18} className="text-gray-500" />
                        <input type="text" placeholder="Search products..." className="outline-none px-2 w-full" />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <Bell className="cursor-pointer hover:text-blue-600" />
                        <User className="cursor-pointer hover:text-blue-600" />
                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-3 pb-4">
                        {menuItems.slice(0, 8).map((item, index) => (
                            <Link key={index} to={item.slug} className="hover:text-blue-600">
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Search */}
                        <div className="flex items-center border rounded-lg px-2 py-1">
                            <Search size={18} className="text-gray-500" />
                            <input type="text" placeholder="Search..." className="outline-none px-2 w-full" />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
