import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../../hooks/useSearch";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    useSearch(searchOpen, setSearchOpen, inputRef, wrapperRef);
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-3 md:px-6 py-3">
                <div className="flex items-center md:space-x-4 space-x-2 transition-all duration-300">
                    <i className="fa-solid fa-cube transform scale-x-[-1] text-sm"></i>
                    <span
                        className={`font-bold md:text-2xl text-lg transition-opacity duration-300 ${searchOpen ? "sm:opacity-100 opacity-0 w-1" : "opacity-100 w-1"}`}
                    >
                        StyleHub
                    </span>
                </div>
                <nav className="hidden lg:flex space-x-12 font-medium text-gray-700 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/newarrivals">New Arrivals</Link>
                    <Link to="/sale">Sale</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Navbar
                    searchOpen={searchOpen}
                    setSearchOpen={setSearchOpen}
                    search={search}
                    setSearch={setSearch}
                    inputRef={inputRef}
                    wrapperRef={wrapperRef}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </div>
            <NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    );
}
