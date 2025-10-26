import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ filteredProducts }) => {
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
                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                    >
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-48 object-cover mb-3 rounded-md"
                        />
                        <h2 className="text-lg font-semibold mb-1">{title}</h2>
                        <p className="text-gray-600">{category}</p>
                        <p className="text-blue-600 font-bold mt-1">${price}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Products
