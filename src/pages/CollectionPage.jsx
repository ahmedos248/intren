import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, fetchCollections } from "../store/productsSlice";

const CollectionPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items, collections, status } = useSelector((s) => s.products);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
            dispatch(fetchCollections());
        }
    }, [dispatch, status]);

    const collection = collections.find((c) => c.id === Number(id));
    const filteredProducts = items.filter((p) => p.collectionId === Number(id));

    if (status === "loading") return <p>Loading...</p>;
    if (!collection) return <p>Collection not found</p>;

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">{collection.title}</h2>
            <p className="text-gray-600 mb-6">{collection.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <div key={p.id} className="p-4 border rounded-lg">
                            <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-lg" />
                            <h3 className="mt-2 font-medium">{p.title}</h3>
                            <p className="text-gray-500 text-sm">{p.desc}</p>
                            <p className="text-sm font-semibold">${p.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found in this collection.</p>
                )}
            </div>
        </section>
    );
};

export default CollectionPage;
