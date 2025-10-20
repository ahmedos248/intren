import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById } from "../store/productsSlice";
import Reviews from "../components/product/Reviews";
import { addToCart } from "../store/cartSlice";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, status } = useSelector((s) => s.products);
  const handeleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product))
    alert("Product added to cart")
  }

  useEffect(() => {
    dispatch(fetchProductById(Number(id)));
  }, [dispatch, id]);


  if (status === "loading") return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <p className="text-gray-500 text-sm mb-6">
        Home / {product.category || "Category"} / {product.title}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-10">
        {Array.isArray(product.images) && product.images.length > 0 ? (
          product.images.map((img, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + img}
              alt={`${product.title} ${index + 1}`}
              className="w-full rounded-lg object-cover"
            />
          ))
        ) : (
          <p>No image available</p>
        )}
      </div>



      {/* Product Info */}
      <h1 className="text-3xl font-semibold mb-3">{product.title}</h1>
      <p className="text-gray-700 mb-6 max-w-3xl">{product.desc}</p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8 text-gray-700">
        <div>
          <p><span className="font-medium">Price:</span> ${product.price}</p>
          <p><span className="font-medium">Material:</span> {product.material || "100% Silk"}</p>
        </div>
        <div>
          <p><span className="font-medium">Sizes:</span> {product.sizes?.join(", ") || "XS, S, M, L, XL"}</p>
          <p><span className="font-medium">Care Instructions:</span> {product.care || "Dry clean only"}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          onClick={(e) => handeleAddToCart(e, product)}>
          Add to Cart
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Add to Wishlist
        </button>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

        <div className="flex items-center gap-3 mb-4">
          <p className="text-4xl font-bold">{product.rating || 4.6}</p>
          <div>
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <p className="text-gray-500 text-sm">{product.reviewsCount || 150} reviews</p>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
}
