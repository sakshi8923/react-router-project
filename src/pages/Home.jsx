import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Award, Users } from 'lucide-react';
import bannerimg from "../../public/images/banner.jpeg";
import work1 from "../../public/images/Work1.jpg";
import work2 from "../../public/images/Work2.jpg";
import work3 from "../../public/images/Work3.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-16 relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={bannerimg}
            alt="Photography background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Capturing Life's
              <span className="text-amber-400 block">Perfect Moments</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab facere tempore illo soluta. Quidem doloremque tenetur cum quis,
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/user-info"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Meet the Artist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PhotoStudio</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We bring years of experience and artistic vision to every shoot
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105">
              <Camera className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Professional Equipment</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non!
              </p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105">
              <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Award Winning</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non
              </p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105">
              <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Happy Clients</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-xl text-gray-400">
              A glimpse into our latest photography projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-xl">
              <img
                src={work1}
                alt="Wedding Photography"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-xl">
              <img
                src={work2}
                alt="Portrait Photography"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-xl">
              <img
                src={work3}
                alt="Landscape Photography"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;