import { useState, useEffect, useMemo } from "react";

export function usePagination(items = []) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setItemsPerPage(2);
            else if (w < 1024) setItemsPerPage(4);
            else setItemsPerPage(4);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const visibleItems = useMemo(() => {
        return items.slice(startIndex, startIndex + itemsPerPage);
    }, [items, startIndex, itemsPerPage]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        visibleItems,
    };
}
