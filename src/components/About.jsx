import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="bg-gray-100 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">E-commerce Intern</h1>
          <button className="text-2xl">&#9776;</button>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">About StyleHub</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            StyleHub was founded in 2010 with a vision to revolutionize the fashion industry by offering high-quality, stylish clothing at accessible prices. Our journey began in a small workshop in Brooklyn, where a team of passionate designers and artisans crafted unique pieces that quickly gained popularity. Over the years, we've grown into a global brand, but our commitment to quality, innovation, and customer satisfaction remains unchanged.
          </p>
        </div>

        <img
          src="/images/about.png"
          alt="Office space with clothes"
          className="w-full rounded-lg mb-10"
        />

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            At StyleHub, our mission is to empower individuals to express their unique style through fashion. We believe that clothing is more than just fabric; it's a form of self-expression and a way to connect with others. We strive to create a diverse range of clothing that caters to all tastes and preferences, ensuring that everyone can find something that resonates with their personal style.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-6">Meet the Team</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
            <div className="text-center">
              <img
                src="images/ava.png"
                alt="Ava Harper"
                className="w-40 h-40 rounded-full mx-auto mb-3"
              />
              <h4 className="font-semibold">Ava Harper</h4>
              <p className="text-gray-600 text-sm">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="images/liam.png"
                alt="Liam Carter"
                className="w-40 h-40 rounded-full mx-auto mb-3"
              />
              <h4 className="font-semibold">Liam Carter</h4>
              <p className="text-gray-600 text-sm">Head of Design</p>
            </div>
            <div className="text-center">
              <img
                src="images/chloe.png"
                alt="Chloe Bennett"
                className="w-40 h-40 rounded-full mx-auto mb-3"
              />
              <h4 className="font-semibold">Chloe Bennett</h4>
              <p className="text-gray-600 text-sm">Marketing Director</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-6">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-5 shadow-sm bg-gray hover:scale-105  hover:bg-gray-100 ">
              <h4 className="font-semibold mb-2">Quality</h4>
              <p className="text-gray-700 text-sm leading-relaxed ">
                We are committed to using the finest materials and craftsmanship to ensure our products meet the highest standards.
              </p>
            </div>
            <div className="border rounded-lg p-5 shadow-sm bg-gray hover:scale-105  hover:bg-gray-100">
              <h4 className="font-semibold mb-2">Customer-Centric</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our customers are at the heart of everything we do. We strive to provide exceptional service and build lasting relationships.
              </p>
            </div>
            <div className="border rounded-lg p-5 shadow-sm bg-gray hover:scale-105  hover:bg-gray-100">
              <h4 className="font-semibold mb-2">Sustainability</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                We are dedicated to minimizing our environmental impact by adopting sustainable practices and promoting ethical sourcing.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            If you have any questions or would like to learn more about StyleHub, please don't hesitate to reach out. You can contact us via email at <a href="mailto:support@stylehub.com" className="text-blue-600 underline">support@stylehub.com</a> or call us at (555) 123-4567. We're always happy to help!
          </p>
        </div>

        <footer className="border-t pt-6 mt-10 text-center text-sm text-gray-600">
          <div className="flex justify-center gap-6 mb-3">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <p>©2024 StyleHub. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default About;
