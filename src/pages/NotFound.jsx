import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl md:text-[12rem] font-bold text-white-800">
              404
            </div>

          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page<span className="text-amber-400">Not Found</span>
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Looks like the page you're looking for has been moved, deleted, or never existed.
            Don't worry, even the best photographers sometimes miss their shot!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
        {/* Decorative Element */}
        {/* <div className="mt-12 opacity-30">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NotFound;