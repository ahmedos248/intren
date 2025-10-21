import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useFetch } from "../hooks/useFetch";
import { useFilter } from "../hooks/useFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useState } from "react";

export default function Blog({ endpoint = "blog" }) {
    const items = useFetch(`http://localhost:5000/${endpoint}`);
    const { category, setCategory, filteredItems } = useFilter(items);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Blog</h1>
            <CategoryFilter selected={category} onFilterChange={setCategory} />

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} px-2 py-1 rounded-full text-sm font-semibold bg-gray-200 dark:bg-gray-700 dark:text-white mx-1">${index + 1}</span>`;
                    },
                }}
                onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="mySwiper mt-4 pb-10"
            >
                {filteredItems.map(({ id, img, title, desc }) => (
                    <SwiperSlide key={id}>
                        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <img src={img} alt={title} className="w-full h-64 object-cover" />
                            <div className="p-2">
                                <h3 className="mt-2 font-medium">{title}</h3>
                                <p className="text-sm text-gray-500">{desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
                Page {currentPage} of {filteredItems.length}
            </p>
        </div>
    );
}
