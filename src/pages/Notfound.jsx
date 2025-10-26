import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex flex-col items-center justify-center text-center flex-grow px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for does not exist or has been moved.
          Please check the URL or use the search bar below to find what you need.
        </p>

        <input
          type="text"
          placeholder="Search"
          className="border rounded-md w-full max-w-md px-4 py-2 mb-6 text-sm focus:outline-none"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800"
          >
            Go to Homepage
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="border border-gray-400 px-6 py-2 rounded-md text-sm hover:bg-gray-100"
          >
            Browse Categories
          </button>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex justify-center gap-4 mb-2 text-gray-500 text-lg">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 StyleHub. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NotFound;
