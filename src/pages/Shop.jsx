import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import Products from "../components/shop/Products";

const Shop = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);
    const searchTerm = useSelector((state) => state.search.term);

    const [filters, setFilters] = useState({
        title: "",
        category: "",
        minPrice: "",
        maxPrice: "",
    });

    // Fetch products only once
    useEffect(() => {
        if (status === "idle") dispatch(fetchProducts());
    }, [dispatch, status]);

    // Memoized categories to avoid recalculation
    const categories = useMemo(
        () => [...new Set(items.map((p) => p.category))],
        [items]
    );

    // Memoized filtered products
    const filteredProducts = useMemo(() => {
        return items.filter((product) => {
            const matchesTitle = product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            const matchesCategory = filters.category
                ? product.category === filters.category
                : true;

            const matchesPrice =
                (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
                (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice));

            return matchesTitle && matchesCategory && matchesPrice;
        });
    }, [items, searchTerm, filters]);

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
