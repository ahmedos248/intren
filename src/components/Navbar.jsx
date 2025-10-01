import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-3">

                <div className="flex items-center space-x-10">
                    <div className="flex items-center space-x-4">
                        <i class="fa-solid fa-cube transform scale-x-[-1]"></i>
                        <span className="font-bold text-2xl">StyleHub</span>
                    </div>

                    <nav className="hidden lg:flex space-x-12 font-medium text-gray-700 text-lg">
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/new">New Arrivals</Link>
                        <Link to="/sale">Sale</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>


                <div className="flex items-center space-x-3">
                    <div className="relative text-2xl md:me-5">
                        <i className="fas fa-search absolute left-3 top-4 text-[#757575]"></i>
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="ps-12 w-48 py-3 rounded-xl bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-black "
                        />
                    </div>
                    <div className="md:flex hidden items-center space-x-3 text-2xl text-[#141414]">
                        <button className="p-3 py-2.5 rounded-xl bg-[#F2F2F2]">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                        <button className="p-3 rounded-xl bg-[#F2F2F2]">
                            <img src="images/cart.svg" alt="" className="w-7 h-7" />
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-3 py-2.5 rounded-xl bg-[#F2F2F2] text-[#141414]"
                        >
                            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
                        </button>
                    </div>
                    <img
                        src="images/nav.png"
                        alt="profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                </div>
            </div>
            <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        </header>
    );
}
