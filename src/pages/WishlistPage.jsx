import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../features/wishlist/wishlistSlice';

const WishlistPage = () => {
    const wishlist = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">My Wishlist 💖</h1>

                {wishlist.length === 0 ? (
                    <p className="text-gray-500 text-center mt-12">
                        Your wishlist is empty. Add some favorites!
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {wishlist.map(item => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow border border-gray-200 flex flex-col"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-md mb-3 object-cover w-full h-56"
                                />
                                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                <p className="text-gray-600 mb-4">${item.price}</p>

                                <div className="mt-auto flex justify-between items-center gap-2">
                                    <Link
                                        to={`/product/${item.id}`}
                                        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
                                    >
                                        View Product
                                    </Link>
                                    <button
                                        onClick={() => dispatch(removeFromWishlist(item.id))}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
