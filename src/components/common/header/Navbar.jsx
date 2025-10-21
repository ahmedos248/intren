import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../store/searchSlice";
import useProfileImage from "../../../hooks/useProfileImage";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Navbar({ searchOpen, setSearchOpen, menuOpen, setMenuOpen, wrapperRef }) {
    const dispatch = useDispatch();
    const searchTerm = useSelector(s => s.search.term);
    const products = useSelector(s => s.cart.products);
    const user = useSelector(s => s.user.user);
    const { updateProfileImage } = useProfileImage();

    return (
        <div className="flex items-center space-x-3">
            <div ref={wrapperRef} className={`flex items-center bg-[#F2F2F2] rounded-xl transition-all duration-300 overflow-hidden justify-center px-3 p-2.5 ${searchOpen ? "w-48 space-x-4" : "w-12"}`}>
                <i className="fas fa-search text-[#757575] text-2xl cursor-pointer" onClick={() => setSearchOpen(true)}></i>
                <input type="text" value={searchTerm} onChange={e => dispatch(setSearchTerm(e.target.value))}
                    placeholder="Search" className={`bg-transparent outline-none w-full transition-opacity duration-300 ${searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
            </div>

            <div className={`flex items-center space-x-3 text-2xl text-[#141414] transition-all ${searchOpen ? "lg:flex lg:w-28 lg:opacity-100 lg:scale-100 w-1 opacity-0 scale-0" : "flex w-28 delay-200"}`}>
                <Link to="/wishlist" className="p-3 py-2.5 rounded-xl bg-[#F2F2F2]"><i className="fa-regular fa-heart"></i></Link>
                <Link to="/shoppingcart" className="p-3 rounded-xl bg-[#F2F2F2] relative">
                    <img src={process.env.PUBLIC_URL + "/images/cart.svg"} alt="cart" className="w-7 h-7" />
                    {products.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">{products.length}</span>}
                </Link>
            </div>

            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(p => !p)} className="p-3 py-2.5 rounded-xl bg-[#F2F2F2] text-[#141414]">
                    <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
                </button>
            </div>

            {!user ? (
                <Link to="/login" className="p-3 py-2.5 rounded-xl bg-[#F2F2F2] text-[#141414] text-sm font-medium">Login</Link>
            ) : (
                <div className="relative group">
                    <img src={user.image || process.env.PUBLIC_URL + "/images/nav.png"} alt={user.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#F2F2F2] cursor-pointer" />
                    <label htmlFor="profile-upload"
                        className="absolute inset-0 bg-black/50 text-white text-xs flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer">Change</label>
                    <input id="profile-upload" type="file" accept="image/*"
                        onChange={e => updateProfileImage(e.target.files[0])} className="hidden" />
                    <button
                        onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    localStorage.removeItem("user");
                                    window.location.reload();
                                })
                                .catch(console.error);
                        }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hidden lg:block"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
