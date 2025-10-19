import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ filteredProducts }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                >
                    <img
                        src={product.images && product.images.length > 0 ? process.env.PUBLIC_URL + product.images[0] : "/placeholder.jpg"}
                        alt={product.title}
                        className="w-full h-48 object-cover mb-3 rounded-md"
                    />
                    <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-blue-600 font-bold mt-1">${product.price}</p>
                </Link>
            ))}
        </div>
    )
}

export default Products
