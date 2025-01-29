import React from 'react';

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 my-auto">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-blue-500 opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              Get in <span className="text-pink-500">Touch</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              I'd love to hear from you! Fill out the form below, and I'll get back to you as soon as possible.
            </p>

            <form
              action="https://formspree.io/f/movqkpad"
              method="POST"
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 mt-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg transform hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Contact Resources */}
          <div className="flex flex-col justify-center items-center text-center lg:text-left space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Contact Details</h2>
              <p className="text-gray-400 mt-2">
                Email: <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">oscarsanz1717@gmail.com</a>
              </p>
              <p className="text-gray-400">
                Phone: <a href="tel:+8135329032" className="text-blue-500 hover:underline">+1 (813-532-9032)</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Location</h2>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509019!2d144.95373531531693!3d-37.81621897975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d9985b6f%3A0x2b258ebd46bd2f28!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616203664490!5m2!1sen!2sau"
                width="100%"
                height="200"
                className="rounded-md shadow-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media Icons */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
