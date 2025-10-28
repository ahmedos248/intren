import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import Filter from "../components/shop/Filter";
import Products from "../components/shop/Products";

const Sale = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.products);
    const { filters, setFilters, filteredProducts, categories } = useFilteredProducts();

    useEffect(() => {
        if (status === "idle") dispatch(fetchProducts());
    }, [dispatch, status]);

    const saleProducts = filteredProducts.filter((p) => p.onSale === true);

    if (status === "loading") return <div className="text-center mt-20">Loading...</div>;
    if (status === "failed") return <div className="text-center mt-20 text-red-500">{error}</div>;

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Sale</h1>
            <Filter filters={filters} setFilters={setFilters} categories={categories} />
            <Products filteredProducts={saleProducts} />
            {saleProducts.length === 0 && (
                <div className="text-center mt-10 text-gray-500">No products on sale.</div>
            )}
        </div>
    );
};

export default Sale;
