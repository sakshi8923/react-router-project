import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Award, Calendar, Camera } from 'lucide-react';
import userimg from "../../public/images/work2.jpg";
import Photographer from "../../public/images/about-banner.jpeg"

const UserInfo = () => {
  const achievements = [
    "International Photography Award 2023",
    "Wedding Photographer of the Year 2022",
    "Portrait Excellence Award 2021",
    "Landscape Photography Recognition 2020"
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1200+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <img
            src={userimg}
            alt="Photography studio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src={Photographer}
                alt="Alex Johnson - Photographer"
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-amber-400 shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Alex <span className="text-amber-400">Johnson</span>
            </h1>
            <p className="text-2xl text-amber-400 mb-6 font-medium">
              Lead Photographer & Creative Director
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 flex items-center">
                <Camera className="mr-4 text-amber-400" />
                My Story
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eveniet distinctio nulla beatae consequatur aperiam ratione, eaque vel voluptatum ipsam vitae accusamus suscipit deleniti autem cupiditate voluptates temporibus minus eius! A cum reiciendis, deleniti id doloribus corrupti omnis quaerat perferendis labore eligendi repellat voluptas facere incidunt minima et modi maxime.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est sapiente impedit beatae dicta cum praesentium natus numquam aspernatur repellat.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg"
                alt="Alex at work"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Award className="mr-4 text-amber-400" />
              Achievements
            </h2>
            <p className="text-xl text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-amber-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {achievement}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <Phone className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">alex@photostudio.com</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">New York, NY</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-gray-300">Mon - Sat</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-8">Follow My Work</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;