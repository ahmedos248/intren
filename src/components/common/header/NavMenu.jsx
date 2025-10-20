import { Link } from "react-router-dom";

export default function NavMenu({ isOpen, onClose }) {
    return (
        <>
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-black/30 backdrop-blur-md z-50 transform transition-transform duration-300 shadow-lg ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center space-x-2 p-6">
                    <i class="fa-solid fa-cube transform scale-x-[-1]"></i>
                    <span className="font-bold text-lg">StyleHub</span>
                </div>
                <div className="flex flex-col mt-8 space-y-6 px-6 text-lg font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/new">New Arrivals</Link>
                    <Link to="/sale">Sale</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>

                </div>
            </div>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black bg-opacity-20 z-40"
                ></div>
            )}
        </>

    );
}
