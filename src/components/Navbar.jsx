import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

                <div className="flex items-center space-x-2">
                    <i class="fa-solid fa-cube transform scale-x-[-1]"></i>
                    <span className="font-bold text-lg">StyleHub</span>
                </div>

                <nav className="hidden lg:flex space-x-6 font-medium text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/new">New Arrivals</Link>
                    <Link to="/sale">Sale</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="md:flex hidden items-center space-x-3">
                        <button className="p-2 rounded-md border border-gray-200 hover:bg-gray-100">
                            <i className="fas fa-heart"></i>
                        </button>
                        <button className="p-2 rounded-md border border-gray-200 hover:bg-gray-100">
                            <i className="fas fa-envelope"></i>
                        </button>

                        <img
                            src="https://randomuser.me/api/portraits/women/45.jpg"
                            alt="profile"
                            className="w-9 h-9 rounded-full object-cover"
                        />
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-md border border-gray-200"
                        >
                            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
                        </button>
                    </div>
                </div>
            </div>
            <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        </header>
    );
}
