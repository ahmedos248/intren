import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react'; // تحتاج لتثبيت مكتبة الأيقونات lucide-react

// **********************************************
// ملاحظة: لضمان عمل الأيقونات، قم بتثبيت lucide-react:
// npm install lucide-react
// أو
// yarn add lucide-react
// **********************************************

const ContactUsPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // أضف منطق معالجة إرسال النموذج هنا (مثل استدعاء API)
        console.log('Form submitted');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-gray-800">StyleHub</div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* Contact Section Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <p className="text-gray-600">
                        We want to help! Reach out with any questions or feedback.
                    </p>
                </div>

                {/* Contact Form and Details Layout */}
                <div className="bg-white p-6 sm:p-10 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Contact Form (النموذج) */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Your message"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Placeholder for potential additional content (like the image in the original design if it was on the side) */}
                        <div className="hidden lg:block">
                            {/* يمكن استخدام هذه المساحة لمعلومات إضافية أو صورة إن أردت */}
                        </div>
                    </div>

                    {/* Map Section (الخريطة) */}
                    <div className="mt-10">
                        {/* The map iframe is set to be responsive (w-full) and has a fixed height */}
                        <iframe
                            src="https://maps.google.com/maps?q=Cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="San Francisco Map"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>

                    {/* Contact Details (تفاصيل الاتصال) */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <p className="text-base text-gray-700 mb-4">
                            *Visit us at our store or connect with us online.* We're always happy to assist you.
                        </p>

                        <div className="space-y-4">

                            {/* Address */}
                            <div className="flex items-start text-gray-600">
                                {/* <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-gray-500 mt-0.5" /> */}
                                <div>
                                    <p className="font-semibold text-gray-800">123 Market Avenue</p>
                                    <p>San Francisco, CA 94102</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center text-gray-600">
                                {/* <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-gray-500" /> */}
                                <a href="tel:1-555-123-4567" className="hover:text-gray-900 transition">
                                    (555) 123-4567
                                </a>
                            </div>

                            {/* Email (Optional, based on image) */}
                            <div className="flex items-center text-gray-600">
                                {/* <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-gray-500" /> */}
                                <a href="mailto:info@stylehub.com" className="hover:text-gray-900 transition">
                                    info@stylehub.com
                                </a>
                            </div>

                            {/* Follow Us Link (Optional, based on image) */}
                            <div className="flex items-center text-gray-600 pt-2">
                                <p className="font-semibold text-gray-800 mr-2">Follow us on Social Media</p>
                                <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                                    &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                    <p>&copy; 2024 StyleHub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactUsPage;
