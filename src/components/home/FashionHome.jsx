import { useEffect } from "react";
import BlogSection from "./BlogSection";
import CollectionsSection from "./CollectionsSection";
import Aos from "aos";
import Section from "../Section";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";




export default function FashionHome() {
    const dispatch = useDispatch();
    const { newArrivals = [], bestSellers = [], status } = useSelector((s) => s.products);

    useEffect(() => {
        Aos.init({ duration: 800, once: true });
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    return (
        <div className="w-full py-10 space-y-12">
            <Section title="New Arrivals" type="new" products={newArrivals.slice(0, 4)} />
            <Section title="Best Sellers" type="best" products={bestSellers.slice(0, 4)} />
            <CollectionsSection />
            <BlogSection />
        </div>
    );
}
