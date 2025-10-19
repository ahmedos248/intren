import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, fetchCollections } from "../store/productsSlice";

const CollectionPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items, collections, status } = useSelector((s) => s.products);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCollections());
    }, [dispatch]);

    const collection = collections.find((c) => Number(c.id) === Number(id));
    const filteredProducts = items.filter((p) => Number(p.collectionId) === Number(id));

    if (status === "loading" && !collections.length) return <p>Loading...</p>;
    if (!collection) return <p>Collection not found</p>;

    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="mb-8 text-center">
                {Array.isArray(collection.images) && collection.images.length > 0 && (
                    <img
                        src={process.env.PUBLIC_URL + collection.images[0]}
                        alt={collection.title}
                        className="w-full max-h-96 object-cover rounded-lg mb-6"
                    />
                )}
                <h2 className="text-3xl font-semibold">{collection.title}</h2>
                <p className="text-gray-600 mt-2">{collection.desc}</p>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <div key={p.id} className="p-4 border rounded-lg">
                            {Array.isArray(p.images) && p.images.length > 0 ? (
                                <img
                                    src={process.env.PUBLIC_URL + p.images[0]}
                                    alt={p.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            ) : (
                                <p>No image</p>
                            )}
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
