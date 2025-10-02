import { useState, useEffect } from "react";

export function usePagination(defaultCount = 8) {
    const [itemsPerPage, setItemsPerPage] = useState(defaultCount);

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
    }, [defaultCount]);

    return itemsPerPage;
}
