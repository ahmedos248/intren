import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      size: "M",
      price: 50.0,
      image: "/images/T-shirt.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      size: "32",
      price: 70.0,
      image: "/images/slim jeans.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Running Shoes",
      size: "9",
      price: 30.0,
      image: "/images/running shoes.png",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const estimatedTax = 15;
  const total = subtotal + shipping + estimatedTax;

  const handleCheckout = () => {
    toast.success(
      <div>
        <div>Your order has been successfully placed.</div>
        <div>Total amount: ${total.toFixed(2)}</div>
      </div>,
      {
        position: "top-center", 
        autoClose: 5000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(item.id, "dec")}
                  className="px-3 py-1 text-lg"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, "inc")}
                  className="px-3 py-1 text-lg"
                >
                  +
                </button>
              </div>
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span>${estimatedTax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-black mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition"
        >
          Proceed to Checkout
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ShoppingCart;
