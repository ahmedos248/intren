import React, { useEffect, useState } from "react";

const Card = ({ img, title, desc }) => (
    <div>
        <img src={img} alt="" className="w-full h-64 object-cover rounded-lg" />
        <h3 className="mt-2 font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
    </div>
);

const Section = ({ title, endpoint }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/${endpoint}`)
            .then(res => res.json())
            .then(setItems);
    }, [endpoint]);

    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {items.map(item => <Card key={item.id} {...item} />)}
            </div>
        </section>
    );
};

export default function FashionHome() {
    return (
        <div className="w-full py-10 space-y-12">
            <Section title="New Arrivals" endpoint="newArrivals" />
            <Section title="Best Sellers" endpoint="bestSellers" />
            <Section title="Curated Collections" endpoint="collections" />
            <Section title="From Our Blog" endpoint="blog" />
        </div>
    );
}
