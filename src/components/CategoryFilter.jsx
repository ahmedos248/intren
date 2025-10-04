const categories = ["All", "Fashion", "Lifestyle", "Trends", "Reviews"];

export default function CategoryFilter({ selected, onFilterChange }) {
    return (
        <div className="flex gap-3 mb-6 justify-start">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onFilterChange(cat)}
                    className={`px-4 py-2 rounded-xl transition ${selected === cat
                        ? "bg-gray-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
