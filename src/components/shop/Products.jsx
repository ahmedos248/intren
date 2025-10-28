import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const Products = ({ filteredProducts }) => {
    const { addToCart } = useCart();
    const handleAddToCart = (e, product) => {
        e.preventDefault();
        addToCart(product);
        alert("Product added to cart!");
    };


    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
                const title = product.title || "No Title";
                const category = product.category || "Uncategorized";
                const price = product.price !== undefined ? product.price : "N/A";
                const imageSrc =
                    product.images && product.images.length > 0
                        ? process.env.PUBLIC_URL + product.images[0]
                        : "/placeholder.jpg";

                return (
                    <div
                        key={product.id}
                        className="relative border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                    >
                        {product.onSale && (
                            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                SALE
                            </span>
                        )}

                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                            title="Add to Wishlist"
                        >
                            <i className="fa fa-heart"></i>
                        </button>

                        <Link to={`/product/${product.id}`}>
                            <img
                                src={imageSrc}
                                alt={title}
                                className="w-full h-48 object-cover mb-3 rounded-md"
                            />
                            <h2 className="text-lg font-semibold mb-1">{title}</h2>
                            <p className="text-gray-600 mb-6">{category}</p>
                        </Link>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4 items-center">
                            <p className="text-blue-600 font-bold">${price}</p>
                            <button
                                onClick={(e) => handleAddToCart(e, product)}
                                className=" text-gray-500 rounded-full "
                                title="Add to Cart"
                            >
                                <i className="fa fa-cart-plus"></i>
                            </button>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Products;
