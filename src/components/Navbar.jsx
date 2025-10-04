import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useSearchBehavior } from "../hooks/useSearchBehavior";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    useSearchBehavior(searchOpen, setSearchOpen, inputRef, wrapperRef);
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-3 md:px-6 py-3">

                <div className="flex items-center md:space-x-4 space-x-2 transition-all duration-300">
                    <i className="fa-solid fa-cube transform scale-x-[-1] text-sm"></i>
                    <span
                        className={`font-bold md:text-2xl text-lg transition-opacity duration-300 ${searchOpen ? "md:opacity-100 opacity-0 w-8" : "opacity-100 w-8"}`}
                    >
                        StyleHub
                    </span>
                </div>
                <nav className="hidden lg:flex space-x-12 font-medium text-gray-700 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/new">New Arrivals</Link>
                    <Link to="/sale">Sale</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="flex items-center space-x-3">
                    <div
                        ref={wrapperRef}
                        className={`flex items-center bg-[#F2F2F2] rounded-xl transition-all duration-300 overflow-hidden justify-center px-3 p-2.5 ${searchOpen ? "w-56 space-x-4" : "w-12"
                            }`}
                    >
                        <i
                            className="fas fa-search text-[#757575] text-2xl cursor-pointer"
                            onClick={() => setSearchOpen(true)}
                        ></i>
                        <input
                            ref={inputRef}
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            className={`bg-transparent outline-none w-full transition-opacity duration-300 ${searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
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
                            onClick={() => setMenuOpen((p) => !p)}
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
