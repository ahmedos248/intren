import { useState, useEffect, useMemo } from "react";

export function useFilter(items = [], defaultCategory = "All") {
    const [category, setCategory] = useState(defaultCategory);

    const filteredItems = useMemo(() => {
        if (category === "All") return items;
        return items.filter((item) => item.category === category);
    }, [category, items]);
    useEffect(() => {
    }, [category]);

    return { category, setCategory, filteredItems };
}
