import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import bottom_icon from "../../assets/bottom_icon.png";
import bottom_vector from "../../assets/bottom_vector.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="font-sans">
        {/* Hero Section */}
        <section className="relative  text-center mt-12">
          <h1 className="text-5xl font-extrabold mb-4  bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold ">
            Your Gateway to Interview Success
          </h1>
          <p className="text-lg mb-8 text-white">
            Mock interviews, collaborative communities, and expert-reviewed
            questions at your fingertips.
          </p>
          <button className="bg-orange px-6 py-3 rounded-full text-white font-semibold text-lg hover:scale-105 transform transition duration-300">
            Start Preparing Today
          </button>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 px-8 mt-12">
          <h2 className="text-4xl font-bold text-center text-orange mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-purple3 rounded-lg text-white hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r from-purple to-orange transition duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Practice Made Perfect</h3>
              <p>
                Peer-to-peer mock interviews to refine your skills and boost
                confidence.
              </p>
            </div>
            <div className="p-6 bg-purple3 rounded-lg text-white hover:shadow-xl  hover:bg-gradient-to-r from-purple to-orange transform hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">Community Support</h3>
              <p>
                Engage in meaningful discussions with like-minded individuals to
                share knowledge.
              </p>
            </div>
            <div className="p-6 bg-purple3 rounded-lg text-white hover:shadow-xl transform hover:scale-105  hover:bg-gradient-to-r from-purple to-orange transition duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-2">Curated Questions</h3>
              <p>
                Access, save, and vote on the most relevant interview questions.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-8 ">
          <h2 className="text-4xl font-bold text-center text-orange mb-8">
            What Our Users Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              loopFillGroupWithBlank={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={3}
              spaceBetween={40}
              slidesPerGroup={1}
              loop={true}
            >
              <SwiperSlide>
                <div className="p-6 bg-purple4 shadow-lg rounded-xl text-center">
                  <h4 className="font-bold text-orange mt-4">
                    - Jane Doe, Software Engineer
                  </h4>
                  <p className="italic text-lg text-white">
                    "This platform changed the way I approach interviews.i got
                    best at it'
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h4 className="font-bold text-orange mt-4">
                  - John Smith, Data Scientist
                </h4>
                <div className="p-6 bg-purple4 shadow-lg rounded-xl text-center">
                  <p className="italic text-lg text-white">
                    "I love how intuitive the system is. The community is also
                    very supportive!"
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-6 bg-purple4 shadow-lg rounded-xl text-center">
                  <h4 className="font-bold text-orange mt-4">
                    - Alice Johnson, Product Manager
                  </h4>
                  <p className="italic text-lg text-white">
                    "Great platform for structured interview practice and
                    networking!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-6 bg-purple4 shadow-lg rounded-xl text-center">
                  <h4 className="font-bold text-orange mt-4">
                    - Alice Johnson, Product Manager
                  </h4>
                  <p className="italic text-lg text-white">
                    "Great platform for structured interview practice and
                    networking!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-6 bg-purple4 shadow-lg rounded-xl text-center">
                  <h4 className="font-bold text-orange mt-4">
                    - Alice Johnson, Product Manager
                  </h4>
                  <p className="italic text-lg text-white">
                    "Great platform for structured interview practice and
                    networking!"
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Call-to-Action Block */}
        <section className=" bg-purple5 py-24 rounded-3xl shadow-lg mt-12 max-w-6xl mx-auto px-2 text-center">
          <h2 className="text-6xl   bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold ">
            Join a Thriving Community
          </h2>
          <p className="text-3xl mb-8 mt-8 text-white">
            Take the first step toward acing your interviews.
          </p>
          <Link to="/Signup">
            <button className="bg-orange text-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transform transition duration-300">
              Sign Up for Free
            </button>
          </Link>
        </section>
      </div>
      <footer
        className=" py-8 mt-24 bg-[right_100%]  bg-cover bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${bottom_vector})` }}
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
};

export default LandingPage;
