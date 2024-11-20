import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import hero_image2 from "../../assets/hero_image2.png";
import vectors from "../../assets/vectors.png";
import community from "../../assets/community.png";
import Categories from "../../Components/Categories/Categories";
import Question from "../../assets/questions.png";
import peermocks from "../../assets/peermocks.png";
import FAQSection from "../../Components/FAQs/FAQs";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import bottom_icon from "../../assets/bottom_icon.png";
import bottom_vector from "../../assets/bottom_vector.png";
function HomeScreen() {
  return (
    <>
      <Navbar />
      <div
        className="text-white px-20 flex items-center justify-between  mb-8  bg-cover bg-[position 50%_center]  min-h-screen h-auto "
        style={{ backgroundImage: `url(${vectors}) ` }}
      >
        <div className="basis-3/5">
          <p className=" text-6xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold ">
            Empower your studies to ace your interview with WandaForum
          </p>
          <p className="text-2xl font-light leading-10 my-9">
            Join this Community to Connect, Share Insights, and Achieve Success
            Together on Your Path to Mastery.
          </p>
          <button className="bg-purple px-4 py-3 rounded-full">
            Get Started
          </button>
        </div>
        <div className="basis-2/5 animate-float">
          <img src={hero_image2} alt="" className=" " />
        </div>
      </div>
      <div className="mt-32 flex  flex-col items-center justify-center">
        <p className="text-3xl font-bold  text-center text-orange ">
          {" "}
          Join over 50,000+ people using WandaForum
        </p>
      </div>
      <section class="relative bg-gradient-to-tr from-purple3 to-purple4 mt-24  py-16 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center  rounded-3xl shadow-lg p-8">
        <div class="flex">
          <img
            src={community}
            alt="Description"
            class="w-1/3  rounded-lg shadow-lg w-50 md:w-1/2 flex justify-center items-start"
          />
          <div class="ml-8 text-white  w-full md:w-1/2 md:mt-0  md:text-left justify-start">
            <h2 class="text-5xl font-bold text-orange">Our Community</h2>
            <p class="mt-12 text-4xl mt-4 leading-relaxed">
              enables you to chat with friends , strangers about a lot of
              interview questions to learn smoothly
            </p>
            <button className="mt-24 bg-purple px-6 py-3 rounded-full text-white hover:bg-purple3 text-2xl">
              Start chat
            </button>
          </div>
        </div>
      </section>
      <Categories />

      <div className="max-w-7xl mx-auto px-6 space-y-16 mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-orange  text-center">
          Real Interview <span className="text-white">Questions</span>
        </h2>
        {/* Real Interview Questions Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-4/5 text-center md:text-left">
            <p className="text-white text-3xl mt-4 leading-relaxed">
              Switching companies? Discover the interview questions companies
              actually ask and watch how experts answer them in over 100+ live
              video answers.
            </p>
            <button className="mt-6 bg-purple4 px-6 py-3 rounded-full hover:bg-purple5 text-white">
              Practice questions
            </button>
          </div>
          {/* Illustration */}
          <div className="md:w-3/5 flex justify-center w-96 animate-float">
            <img
              src={Question} // Replace with the actual image
              alt="Real Interview Questions"
              className="w-80 h-auto"
            />
          </div>
        </div>

        {/* Peer-to-Peer Mock Interviews Section */}
        <div className="flex flex-col  items-center ">
          {/* Text Content */}
          <div className=" text-center mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-orange">
              Peer to peer <span className="text-white">mock interviews</span>
            </h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-2xl">
              Boost your interview skills with our Peer-to-Peer Mock Interviews.
              Practice real-world scenarios, get constructive feedback, and gain
              confidence in a collaborative, supportive environment together
              with friends and peers.
            </p>
          </div>
          {/* Image Content */}
          <div className=" flex justify-center animate-float">
            <img
              src={peermocks} // Replace with the actual image
              alt="Peer-to-Peer Mock Interviews"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <FAQSection />
      <section className="bg-purple5 py-24 rounded-3xl shadow-lg mt-24 max-w-6xl mx-auto px-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl    bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold  ">
            Ready to improve your interview prep?
          </h2>
          <p className="text-white mt-8 text-xl">
            Sign up for free today and get started!
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/3 px-4 py-2  rounded-full border bg-purple5 border-white focus:outline-none focus:ring-2 focus:ring-purple2 text-orange placeholder:text-orange"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="w-full md:w-1/3 px-4 py-2  rounded-full border bg-purple5 border-white focus:outline-none focus:ring-2 focus:ring-purple2 text-orange placeholder:text-orange"
            />
            <button className="w-full md:w-auto bg-purple2 px-6 py-2 rounded-full hover:bg-purple3 text-white">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className=" py-8 mt-24 bg-[right_100%]  bg-cover bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${bottom_vector})`}}
      >
        <div className="max-w-6xl mx-auto px-6 text-center  ">
          <div className="flex flex-col items-center justify-center space-y-2">
            {/* Icon */}
            <div className="bg-orange w-16 h-16 flex items-center justify-center rounded-full">
              <img
                src={bottom_icon} // Replace with the path to your purple icon
                alt="Logo Icon"
                className="w-6 h-8"
              />
            </div>
          </div>
          <h2 className="text-orange text-xl font-bold mt-8">
            Wanda<span className="font-light ">Forum</span>
          </h2>
          <div className="mt-4 flex justify-center space-x-6 text-white">
            <a href="#" className="hover:text-orange">
              Community
            </a>
            <a href="#" className="hover:text-orange">
              Questions
            </a>
            <a href="#" className="hover:text-orange">
              Peermocks
            </a>
            <a href="#" className="hover:text-orange">
              Pricing
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-4 text-orange">
            <a href="#" className="hover:text-white">
              <AiOutlineFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <AiOutlineLinkedin />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-light">
            © 2024 Wandaprep<br></br> All Rights Reserved
          </p>
          <p className="text-orange mt-2 text-sm">
            <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default HomeScreen;
    