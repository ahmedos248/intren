import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/userSlice";
import useProfileImage from "../../../hooks/useProfileImage";

export default function NavMenu({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const user = useSelector((s) => s.user.user);
    const { updateProfileImage } = useProfileImage();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
    };

    return (
        <>
            <div className={`fixed top-0 left-0 w-64 h-full bg-black/30 backdrop-blur-md z-50 shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center space-x-2 p-6">
                    <i className="fa-solid fa-cube scale-x-[-1]" />
                    <span className="font-bold text-lg">StyleHub</span>
                </div>

                <div className="flex flex-col mt-8 space-y-6 px-6 text-lg font-medium">
                    {["Home", "Shop", "New Arrivals", "Sale", "Blog", "Contact", "About"].map((t, i) => (
                        <Link key={i} to={`/${t === "Home" ? "" : t.toLowerCase().replace(" ", "")}`}>{t}</Link>
                    ))}

                    {!user ? (
                        <Link to="/login" className="p-3 py-2.5 rounded-xl bg-[#F2F2F2] text-[#141414] text-sm font-medium">Login</Link>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <div className="relative group">
                                <img src={user.image || process.env.PUBLIC_URL + "/images/nav.png"} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#F2F2F2] cursor-pointer" />
                                <label htmlFor="profile-upload" className="absolute inset-0 bg-black/50 text-white text-xs flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer">Change</label>
                                <input id="profile-upload" type="file" accept="image/*" onChange={(e) => updateProfileImage(e.target.files[0])} className="hidden" />
                            </div>
                            <span className="text-sm text-white">{user.name}</span>
                            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 transition">Logout</button>
                        </div>
                    )}
                </div>
            </div>

            {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/20 z-40" />}
        </>
    );
}
