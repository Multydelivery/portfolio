import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800/50 overflow-hidden py-12">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Mission Statement */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-gray-800/50 border border-gray-700/50 rounded-full px-6 py-3 mb-6">
            <FontAwesomeIcon icon={faRocket} className="text-cyan-400 mr-3" />
            <span className="text-sm font-medium text-gray-300">BUILDING THE FUTURE TODAY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Extraordinary</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I'm passionate about pushing boundaries and crafting innovative digital experiences that make an impact.
          </p>
        </div>

        {/* Contact Summary */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-white mb-2">Get In Touch</h3>
            <p className="text-gray-400">multydeliverynj@gmail.com</p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-white mb-2">Based In</h3>
            <p className="text-gray-400">North, New Jersey</p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-white mb-2">Availability</h3>
            <p className="text-gray-400">Open for collaborations</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-8"></div>

        {/* Copyright + Signature */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Felipe Sanz. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCode} className="text-gray-600" />
            <span className="text-gray-500 text-sm">
              Crafted with passion and React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



