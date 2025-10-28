import React from "react";

const Filter = ({ filters = {}, setFilters = () => { }, categories = [] }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            <input
                type="number"
                placeholder="Min price"
                value={filters.minPrice || ""}
                onChange={(e) =>
                    setFilters({ ...filters, minPrice: e.target.value })
                }
                className="border p-2 rounded-lg w-32"
            />
            <input
                type="number"
                placeholder="Max price"
                value={filters.maxPrice || ""}
                onChange={(e) =>
                    setFilters({ ...filters, maxPrice: e.target.value })
                }
                className="border p-2 rounded-lg w-32"
            />
            <select
                value={filters.category || ""}
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
    );
};

export default Filter;
