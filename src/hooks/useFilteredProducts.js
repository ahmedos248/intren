import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useFilteredProducts = (filters) => {
    const { items } = useSelector((state) => state.products);
    const searchTerm = useSelector((state) => state.search.term);

    const filteredProducts = useMemo(() => {
        return items.filter((product) => {
            const matchesTitle = (product.title || "")
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase());

            const matchesCategory = filters.category
                ? (product.category || "") === filters.category
                : true;

            const matchesPrice =
                (!filters.minPrice || (product.price || 0) >= parseFloat(filters.minPrice)) &&
                (!filters.maxPrice || (product.price || 0) <= parseFloat(filters.maxPrice));

            return matchesTitle && matchesCategory && matchesPrice;
        });
    }, [items, searchTerm, filters]);

    const categories = useMemo(
        () => [...new Set(items.map((p) => p.category || ""))].filter(Boolean),
        [items]
    );

    return { filteredProducts, categories };
};
