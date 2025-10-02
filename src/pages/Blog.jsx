import { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePagination";

const Blog = ({ endpoint = "blog" }) => {
    const [items, setItems] = useState([]);
    const itemsPerPage = usePagination();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        fetch(`http://localhost:5000/${endpoint}`)
            .then(res => res.json())
            .then(setItems);
    }, [endpoint]);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {visibleItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt="" className="w-full h-64 object-cover rounded-lg" />
                        <h3 className="mt-2 font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-6">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition 
      ${currentPage === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                >
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition 
        ${currentPage === num
                                ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
                                : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                    >
                        {num}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition 
      ${currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                >
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

        </div>
    );
};

export default Blog;
