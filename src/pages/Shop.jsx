import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import Products from "../components/shop/Products";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

const Shop = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.products);

    const [filters, setFilters] = useState({
        category: "",
        minPrice: "",
        maxPrice: "",
    });

    // Fetch products only once
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    // Use custom hook for filtering
    const { filteredProducts, categories } = useFilteredProducts(filters);

    if (status === "loading")
        return <div className="text-center mt-20">Loading...</div>;

    if (status === "failed")
        return (
            <div className="text-center mt-20 text-red-500">{error}</div>
        );

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <input
                    type="number"
                    placeholder="Min price"
                    value={filters.minPrice}
                    onChange={(e) =>
                        setFilters({ ...filters, minPrice: e.target.value })
                    }
                    className="border p-2 rounded-lg w-32"
                />
                <input
                    type="number"
                    placeholder="Max price"
                    value={filters.maxPrice}
                    onChange={(e) =>
                        setFilters({ ...filters, maxPrice: e.target.value })
                    }
                    className="border p-2 rounded-lg w-32"
                />
                <select
                    value={filters.category}
                    onChange={(e) =>
                        setFilters({ ...filters, category: e.target.value })
                    }
                    className="border p-2 rounded-lg w-40"
                >
                    <option value="">All categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            {/* Products */}
            <Products filteredProducts={filteredProducts} />

            {filteredProducts.length === 0 && (
                <div className="text-center mt-10 text-gray-500">
                    No products found.
                </div>
            )}
        </div>
    );
};

export default Shop;
