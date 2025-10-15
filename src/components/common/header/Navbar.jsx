import { Link } from "react-router-dom"
import { setSearchTerm } from "../../../store/searchSlice"
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({
    searchOpen,
    setSearchOpen,
    menuOpen,
    setMenuOpen,
    // inputRef,
    wrapperRef,
}) => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.search.term);

    return (
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
                    // ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    placeholder="Search"
                    className={`bg-transparent outline-none w-full transition-opacity duration-300 ${searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                />
            </div>
            <div className="md:flex hidden items-center space-x-3 text-2xl text-[#141414]">
                <Link to="/wishlist" className="p-3 py-2.5 rounded-xl bg-[#F2F2F2]">
                    <i className="fa-regular fa-heart"></i>
                </Link>
                <Link to="/cart" className="p-3 rounded-xl bg-[#F2F2F2]">
                    <img src="images/cart.svg" alt="" className="w-7 h-7" />
                </Link>
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
    )
}
export default Navbar
