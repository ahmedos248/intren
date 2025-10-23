import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilter } from "../hooks/useFilter";
import { usePagination } from "../hooks/usePagination";
import CategoryFilter from "../components/CategoryFilter";

export default function Blog({ endpoint = "blog" }) {
    const items = useFetch(`http://localhost:5000/${endpoint}`);
    const { category, setCategory, filteredItems } = useFilter(items);
    const { currentPage, setCurrentPage, totalPages, visibleItems } = usePagination(filteredItems, 8);

    useEffect(() => setCurrentPage(1), [category, setCurrentPage]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <CategoryFilter selected={category} onFilterChange={setCategory} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {visibleItems.map(({ id, img, title, desc }) => (
                    <div key={id}>
                        <img src={img} alt={title} className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="mt-2 font-medium">{title}</h3>
                        <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-6">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
                    <i className="fa-solid fa-angle-left" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition ${currentPage === i + 1 ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
                        {i + 1}
                    </button>
                ))}

                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
                    <i className="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>
    );
}
