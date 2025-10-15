import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "../../store/productsSlice";

const BlogSection = () => {
    const dispatch = useDispatch();
    const { blog, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    if (status === "loading") return <p>Loading...</p>;

    return (
        <section className="my-10">
            <h2 className="text-2xl font-semibold mb-6">From Our Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {blog.slice(0, 4).map(post => (
                    <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition">
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="mt-3">
                            <span className="text-sm text-gray-500">{post.category}</span>
                            <h3 className="font-semibold mt-1">{post.title}</h3>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
