import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden py-20">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-cyan-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connect</span> With Me
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Have a project in mind or want to discuss opportunities? Send me a message and I'll respond within 24 hours.
            </p>

            <form
              action="https://formspree.io/f/movqkpad"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                    />
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-cyan-400/30 pointer-events-none"></div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    />
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-purple-400/30 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all"
                  ></textarea>
                  <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-pink-400/30 pointer-events-none"></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <a href="mailto:oscarsanz1717@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
                      oscarsanz1717@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <a href="tel:+8135329032" className="text-gray-400 hover:text-purple-400 transition">
                      +1 (813) 532-9032
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-pink-500/10 transition-all">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center text-pink-400">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-gray-400">Tampa, Florida</p>
                  </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-700/50">
                  <iframe
                    title="Tampa Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112849.08119594811!2d-82.52162899999999!3d27.9941984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    className="border-0"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
              <h3 className="text-lg font-medium text-white mb-4">Connect Socially</h3>
              <div className="flex space-x-4">
                {[
                  { icon: faGithub, url: 'https://github.com/Multydelivery', color: 'text-gray-400 hover:text-white' },
                  { icon: faLinkedin, url: 'https://www.linkedin.com/in/felipe-sanz-b4b5b630b/', color: 'text-blue-400 hover:text-blue-300' },
                  { icon: faTwitter, url: 'https://x.com/felipeCode24', color: 'text-cyan-400 hover:text-cyan-300' },
                  { icon: faInstagram, url: 'https://www.instagram.com/felipesanz17', color: 'text-pink-400 hover:text-pink-300' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all ${social.color}`}
                    aria-label={social.icon.iconName}
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
