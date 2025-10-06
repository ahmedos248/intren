import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/wishlist/wishlistSlice';

const WishlistItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-white p-4 rounded-xl shadow border border-gray-200 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                {item.price && <p className="text-gray-600">${item.price}</p>}
                {item.url && (
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:underline text-sm"
                    >
                        View product
                    </a>
                )}
            </div>
            <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 mt-2 text-sm hover:underline self-end"
            >
                Remove
            </button>
        </div>
    );
};

export default WishlistItem;
