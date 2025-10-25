import React from 'react';
import { Camera, Heart, Star, Clock } from 'lucide-react';
import aboutbanner from "../../public/images/about-banner.jpeg";
import storyimg from "../../public/images/story.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img
            src={aboutbanner}
            alt="Photography studio"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-amber-400">PhotoStudio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat eius laborum consequuntur voluptatem officiis molestias unde, accusamus quam deserunt!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat eius laborum consequuntur voluptatem officiis molestias unde, accusamus quam deserunt!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat eius laborum consequuntur voluptatem officiis molestias unde, accusamus quam deserunt!
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={storyimg}
                alt="Photography equipment"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Camera className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium
              </p>
            </div>

            <div className="text-center p-6">
              <Heart className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium
              </p>
            </div>

            <div className="text-center p-6">
              <Star className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Creativity</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium
              </p>
            </div>

            <div className="text-center p-6">
              <Clock className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">
              Comprehensive photography solutions for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Wedding Photography</h3>
              <p className="text-gray-300 mb-4">
                Capture your special day with artistic flair and emotional depth. From engagement shoots to the big day itself.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>

              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Portrait Photography</h3>
              <p className="text-gray-300 mb-4">
                Professional headshots, family portraits, and personal branding photography that showcases your unique personality.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>

              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Event Photography</h3>
              <p className="text-gray-300 mb-4">
                Document your corporate events, celebrations, and special gatherings with professional quality and attention to detail.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>
                <li>• Lorem ipsum dolor</li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;