import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/userSlice";
import { useSelector } from "react-redux";

export default function NavMenu({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleLogout = () => {
        dispatch(logout());
    };
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
                    {!user ? (
                        <Link
                            to="/login"
                            className="p-3 py-2.5 rounded-xl bg-[#F2F2F2] text-[#141414] text-sm font-medium"
                        >
                            Login
                        </Link>
                    ) : (
                        <div className="flex items-center gap-3">
                            <img
                                src={user.image || process.env.PUBLIC_URL + "/images/nav.png"}
                                alt={user.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#F2F2F2]"
                            />
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    )}
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
