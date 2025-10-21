import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit cards (Visa, MasterCard, American Express), debit cards, and PayPal. All transactions are processed securely to ensure your information is protected.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order has shipped, you'll receive an email with a tracking link so you can monitor your delivery status.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return most items within 14 days of receiving your order. Please make sure the product is unused and in its original packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3–5 business days, depending on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to selected countries. Shipping fees and times vary by destination.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-grow flex flex-col items-center px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="w-full max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg mb-3 shadow-sm">
              <button
                className="w-full text-left px-4 py-3 font-medium flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className="text-xl">{open === index ? "−" : "+"}</span>
              </button>
              {open === index && (
                <div className="px-4 pb-3 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-600">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p>©2024 StyleHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
