import { useFetch } from "../../hooks/useFetch";

const Card = ({ img, title, desc }) => (
    <div>
        <img src={img} alt="" className="w-full h-64 object-cover rounded-lg" />
        <h3 className="mt-2 font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
    </div>
);

const Section = ({ title, endpoint, limit = 4 }) => {
    const items = useFetch(`http://localhost:5000/${endpoint}`);

    return (
        <section>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {items.slice(0, limit).map(item => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default function FashionHome() {
    return (
        <div className="w-full py-10 space-y-12">
            <Section title="New Arrivals" endpoint="newArrivals" limit={4} />
            <Section title="Best Sellers" endpoint="bestSellers" limit={4} />
            <Section title="Curated Collections" endpoint="collections" limit={4} />
            <Section title="From Our Blog" endpoint="blog" limit={4} />
        </div>
    );
}
