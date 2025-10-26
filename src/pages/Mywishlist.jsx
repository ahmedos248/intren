// src/pages/MyWishlist.jsx
import React from "react";

export default function MyWishlist() {
  const items = [
    {
      id: 1,
      title: "Slim Fit Stretch Jeans",
      price: "$79.99",
      image: "/images/stretch jeans.png",
    },
    {
      id: 2,
      title: "Classic Leather Belt",
      price: "$39.99",
      image: "/images/classic.png",
    },
    {
      id: 3,
      title: "Cotton Crew Neck T-Shirt",
      price: "$24.99",
      image: "/images/cotton shirt.png",
    },
    {
      id: 4,
      title: "Sporty Running Shoes",
      price: "$99.99",
      image: "/images/sport shoes.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8">My Wishlist</h2>

        <div className="w-full bg-white">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-start">
            {items.map((it) => (
              <figure key={it.id} className="flex flex-col items-start">
                <div className="w-full rounded-lg overflow-hidden bg-gray-50 shadow-sm">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-full h-[320px] object-cover"
                  />
                </div>

                <figcaption className="mt-3 w-full">
                  <p className="text-sm font-medium text-gray-700 leading-tight">
                    {it.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{it.price}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center items-center">
            <button className="text-gray-400 hover:text-gray-600 mr-4 text-lg">
              ‹
            </button>

            <nav className="inline-flex items-center space-x-3">
              <button className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                <span className="text-sm text-gray-600">1</span>
              </button>

              <button className="w-8 h-8 rounded-full text-sm text-gray-600 hover:bg-gray-100 border border-gray-200">
                2
              </button>

              <button className="w-8 h-8 rounded-full text-sm text-gray-600 hover:bg-gray-100 border border-gray-200">
                3
              </button>
            </nav>

            <button className="text-gray-400 hover:text-gray-600 ml-4 text-lg">
              ›
            </button>
          </div>
        </div>
      </main>

      <div className="h-36 bg-gray-900 mt-12" />
    </div>
  );
}
