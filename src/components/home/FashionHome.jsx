import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import BlogSection from "./BlogSection";
import { Link } from "react-router-dom";
import CollectionsSection from "./CollectionsSection";

const Card = ({ id, images, title }) => (
    <Link
        to={`/product/${id}`}
        className="p-4 border rounded-lg hover:shadow-lg transition"
    >
        <img
            src={images && images.length > 0 ? images[0] : "/placeholder.jpg"}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="font-medium mt-2">{title}</h3>
    </Link>
);


const Section = ({ title, type }) => {
    const dispatch = useDispatch();
    const { newArrivals, bestSellers, status } = useSelector((s) => s.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") return <p>Loading...</p>;

    const products = type === "new" ? newArrivals : bestSellers;

    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((p) => (
                    <Card key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
};

export default function FashionHome() {
    return (
        <div className="w-full py-10 space-y-12">
            <Section title="New Arrivals" type="new" />
            <Section title="Best Sellers" type="best" />
            <CollectionsSection />
            <BlogSection />
        </div>
    );
}
