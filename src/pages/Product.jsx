import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status } = useSelector((s) => s.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  const product = items.find((p) => p.id === Number(id));

  if (status === "loading") return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.desc}</p>
          <p className="text-lg font-medium mb-2">Category: {product.category}</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            ${product.price}
          </p>
          <p className="text-yellow-500">⭐ {product.rating}</p>
        </div>
      </div>
    </div>
  );
}
