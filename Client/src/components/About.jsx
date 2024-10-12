// About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dffxv7leq/image/upload/v1728141728/bt95gnwyiijfgotiv9at.webp" // Replace with your image
              alt="About Us"
              className="w-full rounded-lg shadow-lg h-[44rem] sm:w-[35rem]"
            />
          </div>
          
          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT US</h2>
            <p className="text-gray-600 leading-7 mb-6">
              Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. 
              Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, 
              and purchase a wide range of products from the comfort of their homes.
            </p>
            <p className="text-gray-600 leading-7 mb-6">
              Since our inception, we’ve worked tirelessly to curate a diverse selection of high-quality products that cater to every 
              taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection 
              sourced from trusted brands and suppliers.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-7">
              Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing 
              a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">WHY CHOOSE US</h3>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-center mb-8 md:mb-0 md:px-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                We meticulously select and vet each product to ensure it meets our stringent quality standards.
              </p>
            </div>
            <div className="text-center mb-8 md:mb-0 md:px-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Convenience</h4>
              <p className="text-gray-600">
                With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
              </p>
            </div>
            <div className="text-center md:px-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Exceptional Customer Service</h4>
              <p className="text-gray-600">
                Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Subscribe now & get 20% off</h3>
          <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
