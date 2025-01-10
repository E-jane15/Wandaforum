import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import contactimg from "../../assets/contact.jpg"
const contact = () => {
  return (
    <>
     <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-darkpurple text-white px-6  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl w-full">
          {/* Contact Form Section */}
          <div className="bg-purple p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-sm mb-6">
              Have any questions or feedback? Fill out the form below, and we'll
              get back to you shortly.
            </p>
            <form>
              {/*=========== Name Field========= */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full bg-darkpurple p-2 border border-darkpurple rounded-3xl focus:outline-none focus:ring focus:ring-purple2 "
                  placeholder="Your First Name"
                />
              </div>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-darkpurple p-2 border border-darkpurple rounded-3xl focus:outline-none focus:ring focus:ring-purple2"
                  placeholder="Your Email Address"
                />
              </div>
              {/* Message Field */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full bg-darkpurple p-2 border border-darkpurple rounded focus:outline-none focus:ring focus:ring-purple2"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange text-white py-2 px-4 rounded-lg font-bold hover:bg-orange/80"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="flex items-center justify-center">
            <img
              src={contactimg}
              alt="Contact Illustration"
              className="w-full h-full shadow-lg rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default contact