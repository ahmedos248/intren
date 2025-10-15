import { useDispatch, useSelector } from "react-redux";
import { fetchCollections, fetchProducts } from "../../store/productsSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CollectionsSection = () => {
    const dispatch = useDispatch();
    const { collections, status } = useSelector((s) => s.products);

    useEffect(() => {
        dispatch(fetchCollections());
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") return <p>Loading...</p>;

    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">Curated Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {collections.map((col) => (
                    <Link
                        to={`/collection/${col.id}`}
                        key={col.id}
                        className="p-4 border rounded-lg hover:shadow-lg transition"
                    >
                        <img
                            src={col.img}
                            alt={col.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="mt-2 font-medium">{col.title}</h3>
                        <p className="text-sm text-gray-500">{col.desc}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CollectionsSection;
