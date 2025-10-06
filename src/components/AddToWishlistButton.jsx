import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../features/wishlist/wishlistSlice';

const AddToWishlistButton = ({ product }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const isInWishlist = wishlist.some(item => item.id === product.id);

    return (
        <button
            onClick={() =>
                isInWishlist
                    ? dispatch(removeFromWishlist(product.id))
                    : dispatch(addToWishlist(product))
            }
            className={`px-4 py-2 rounded-md font-medium border transition ${isInWishlist
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
        >
            {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
    );
};

export default AddToWishlistButton;
