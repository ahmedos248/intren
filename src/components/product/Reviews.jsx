import React from 'react';
import { useSelector } from 'react-redux';

const Reviews = () => {
    const { product } = useSelector((s) => s.products);

    return (
        <div className="space-y-6">
            {product?.reviews?.length > 0 && (
                product.reviews.map((r, i) => (
                    <div key={i} className="border-b pb-4">
                        <div className="flex items-center gap-3 mb-1">
                            <img
                                src={r.avatar || "/images/default-avatar.png"}
                                alt={r.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium">{r.name}</p>
                                <p className="text-sm text-gray-500">{r.date}</p>
                            </div>
                        </div>
                        <p className="text-yellow-500 mb-1">
                            {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                        </p>
                        <p className="text-gray-700">{r.comment}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Reviews;
