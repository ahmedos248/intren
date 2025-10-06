import React, { useState } from "react";

const Product = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const product = {
    name: "Elegant Red Evening Gown",
    price: 299.99,
    material: "100% Silk",
    sizes: ["XS", "S", "M", "L", "XL"],
    care: "Dry clean only",
    images: {
      illustration: "/images/dress1.png",
      photo: "/images/dress2.png",
    },
    rating: 4.6,
    totalReviews: 150,
    reviews: [
      {
        name: "Sophia Carter",
        date: "May 15, 2024",
        stars: 5,
        text: "Absolutely love this dress! The color is vibrant, and the fit is perfect.",
        image: "/images/sophia.png",
      },
      {
        name: "Olivia Bennett",
        date: "May 10, 2024",
        stars: 4,
        text: "The dress is beautiful and well-made, but the material is delicate.",
        image: "/images/olivia.png",
      },
      {
        name: "Isabella Harper",
        date: "May 5, 2024",
        stars: 5,
        text: "This gown exceeded my expectations. Highly recommend!",
        image: "/images/isabella.png",
      },
    ],
  };

  const addToCart = () => setCart([...cart, product]);
  const addToWishlist = () => setWishlist([...wishlist, product]);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-8">
      <div className="max-w-6xl bg-white rounded shadow px-8 py-8">
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            style={{ width: "300px", borderRadius: "10px", height: "500px" }}
            src={product.images.illustration}
            alt="illustration"
          />
          <img
            style={{ width: "300px", borderRadius: "10px", height: "500px" }}
            src={product.images.photo}
            alt="photo"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-3">
            This stunning red evening gown is perfect for any special occasion.
            Made from luxurious silk, it features a flattering silhouette and
            intricate detailing. Available in sizes XS to XL.
          </p>

          <h3 className="mt-6 mb-3 font-semibold">Details</h3>
          <div className="border-t border-b divide-y">
            <div className="grid grid-cols-2 gap-4 py-4 text-sm">
              <div>
                <div className="text-gray-500 text-xs">Price</div>
                <div className="font-medium">${product.price.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs">Material</div>
                <div>{product.material}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 text-sm">
              <div>
                <div className="text-gray-500 text-xs">Sizes</div>
                <div>{product.sizes.join(", ")}</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs">Care Instructions</div>
                <div>{product.care}</div>
              </div>
            </div>
          </div>

          {/* الأزرار */}
          <div className="mt-6 flex gap-3">
            <button
              className="bg-black text-white px-4 py-2 rounded text-sm"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              className="border px-3 py-2 rounded text-sm"
              onClick={() => setIsCartOpen(true)}
            >
              Open Cart ({cart.length})
            </button>
            <button
              className="border px-3 py-2 rounded text-sm bg-black text-white"
              onClick={addToWishlist}
            >
              Add to Wishlist
            </button>
            <button
              className="border px-3 py-2 rounded text-sm"
              onClick={() => setIsWishlistOpen(true)}
            >
              Open Wishlist ({wishlist.length})
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          {product.reviews.map((r, i) => (
            <div key={i} className="border-b pb-4">
              <div className="flex gap-2">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={r.image}
                  alt={r.name}
                />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.date}</div>
                </div>
              </div>
              <div className="text-yellow-500 text-2xl">
                {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
              </div>
              <p className="mt-2 text-gray-700">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsCartOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="space-y-3">
                {cart.map((item, i) => (
                  <li key={i} className="flex justify-between border-b pb-2">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {isWishlistOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsWishlistOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Wishlist</h2>
            {wishlist.length === 0 ? (
              <p>Your wishlist is empty</p>
            ) : (
              <ul className="space-y-3">
                {wishlist.map((item, i) => (
                  <li key={i} className="flex justify-between border-b pb-2">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
