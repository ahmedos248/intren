import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, images = [], title = "No Title" }) => (
    <Link
        to={`/product/${id}`}
        className="p-4 border rounded-lg hover:shadow-lg transition"
        data-aos="fade-up"
    >
        <img
            src={images.length > 0 ? images[0] : "/placeholder.jpg"}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="font-medium mt-2 text-center">{title}</h3>
    </Link>
);

export default Card;
