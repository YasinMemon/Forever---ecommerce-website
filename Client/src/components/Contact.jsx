// Contact.js
import React from 'react';
import Subscribe from './Subscribe';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="w-[70vw] mx-auto ">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">CONTACT US</h2>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://foreverbuy.in/assets/contact_img-CyOum2vk.png" // Replace with the actual image path
              alt="Contact Us"
              className="w-full sm:w-96 rounded-lg shadow-lg h-96"
            />
          </div>

          {/* Right Side - Contact Info */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Store</h3>
            <p className="text-gray-600 mb-6">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>

            <p className="text-gray-600 mb-4">
              <strong>Tel:</strong> (415) 555-0132 <br />
              <strong>Email:</strong> admin@forever.com
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Careers at Forever</h3>
            <p className="text-gray-600 mb-6">
              Learn more about our teams and job openings.
            </p>

            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <Subscribe/>
      </div>
    </div>
  );
};

export default Contact;
