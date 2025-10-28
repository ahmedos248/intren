import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchProducts } from "../store/productsSlice";
import Card from "./Card";

const Section = ({ title, type, products }) => {
    const dispatch = useDispatch();
    const { newArrivals = [], bestSellers = [], status } = useSelector((s) => s.products);

    useEffect(() => {
        Aos.init({ duration: 600 });
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    if (status === "loading") return <p>Loading...</p>;
    const displayProducts = products?.length
        ? products
        : type === "new"
            ? newArrivals
            : bestSellers;

    return (
        <section data-aos="fade-up" className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {displayProducts.map((p) => (
                    <Card key={p.id} {...p} />
                ))}
            </div>
        </section>
    );
};

export default Section;
