import React, { useState } from "react";

const Products = () => {
  const product = {
    name: "Elegant Red Evening Gown",
    price: 299.99,
    material: "100% Silk",
    sizes: ["XS", "S", "M", "L", "XL"],
    care: "Dry clean only",
    images: {
      illustration: "/images/dress-illustration.png",
      photo: "/images/dress-photo.png",
    },
    rating: 4.6,
    totalReviews: 150,
    ratingCounts: { 5: 75, 4: 45, 3: 15, 2: 7, 1: 8 },
    reviews: [
      {
        name: "Sophia Carter",
        date: "May 15, 2024",
        stars: 5,
        text: "Absolutely love this dress! The color is vibrant, and the fit is perfect."
      },
      {
        name: "Olivia Bennett",
        date: "May 10, 2024",
        stars: 4,
        text: "The dress is beautiful and well-made, but the material is delicate."
      },
      {
        name: "Isabella Harper",
        date: "May 5, 2024",
        stars: 5,
        text: "This gown exceeded my expectations. Highly recommend!"
      }
    ]
  };

  const [size, setSize] = useState(product.sizes[0]);
  const total = Object.values(product.ratingCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-8">
      <div className="max-w-6xl bg-white rounded shadow px-8 py-8">

        {/* الصور */}

        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src="./dress.jpg"
            alt="Illustration"
            style={{ width: "30%", borderRadius: "10px", height: "500px" }}
          />
          <img
            src="./dress2.jpg"
            alt="Product"
            style={{ width: "30%", borderRadius: "10px", height: "500px" }}
          />
        </div>




        {/* تفاصيل المنتج */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-3">
            This stunning red evening gown is perfect for any special occasion. Made from luxurious silk,
            it features a flattering silhouette and intricate detailing. Available in sizes XS to XL.
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

          <div className="mt-6 flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded text-sm">Add to Cart</button>
            <button className="border px-3 py-2 rounded text-sm">Add to Wishlist</button>
          </div>
        </div>

        {/* التقييم والمراجعات */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          <div className="flex gap-8 items-start">
            <div className="w-40">
              <div className="text-4xl font-bold">{product.rating}</div>
              <div className="text-sm text-gray-500">{product.totalReviews} reviews</div>
            </div>
            <div className="flex-1 space-y-2">


            </div>
          </div>

          <div className="mt-8 space-y-6">
            {product.reviews.map((r, i) => (
              <div key={i} className="border-b pb-4">
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-gray-500">{r.date}</div>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
                </div>
                <p className="mt-2 text-gray-700">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Products;
