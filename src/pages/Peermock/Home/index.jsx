import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import hero_image from "../../../assets/hero_image.png";
import join_image from "../../../assets/join_image.png";
import videocall_image from "../../../assets/videocall_image.png";
import chart_icon from "../../../assets/chart.svg";
import peers_icon from "../../../assets/peers.svg";
import feedback_icon from "../../../assets/feedback.svg";
import number_one from "../../../assets/number_one.svg";
import number_two from "../../../assets/number_two.svg";
import number_three from "../../../assets/number_three.svg";
import Workcard from "../../../Components/Workcard/Workcard";
import TestimonialCard from "../../../Components/TestimonialCard/TestimonialCard";
import InterviewTypeModal from "../../../Components/Modals/InterviewTypeModal";
import PeerTypeModal from "../../../Components/Modals/PeerTypeModal";
import PracticeLevelModal from "../../../Components/Modals/PracticeLevelModal";
import TimeModal from "../../../Components/Modals/TimeModal";
import FinalModal from "../../../Components/Modals/FinalModal";
import bottom_vector from "../../../assets/bottom_vector.png";
import bottom_icon from "../../../assets/bottom_icon.png"
import { useSelector, useDispatch } from "react-redux";
import { cancelInterview } from "../../../redux/selectionSlice";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


function PeermockHome() {
  const workcards = [
    {
      number: number_one,
      heading: "Schedule a session",
      paragraph:
        "Join today or pre-schedule a practice session that suits youravailability, skills and experience.",
    },
    {
      number: number_two,
      heading: "Get paired",
      paragraph:
        "Get paired automatically with peer preparing for similar interviews. Take turns playing the roles of interviewer and interviewee.",
    },
    {
      number: number_three,
      heading: "Share Feedback",
      paragraph:
        "Exchange  keynotes with partner after the session to improve for next time.",
    },
  ];

  const testimonialCards = [
    {
      test_pic: number_one,
      test_name: "Jane",
      test_profession: "Frontend Developer",
      test_company: "Wandaprep",
      testimonial:
        "Peer-peer mock interviews are the real deal. I totally recommend.",
    },
    {
      test_pic: number_one,
      test_name: "Kelly",
      test_profession: "Devops Specialist",
      test_company: "Wandaprep",
      testimonial:
        "Peer-peer mock interviews are the real deal. I totally recommend.",
    },
    {
      test_pic: number_one,
      test_name: "Angela",
      test_profession: "UI/UX Designer",
      test_company: "Wandaprep",
      testimonial:
        "Peer-peer mock interviews are the real deal. I totally recommend.",
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    if (remainingCredits > 0) {
      document.body.classList.add("overflow-hidden");
      setOpenModal(true);
    } else {
      alert("You have no credits remaining. Please purchase more credits to schedule an interview.");
    }
  };
  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    setOpenModal(false);
  };
//Redux states for selections and scheduled interviews
  const selectItem = useSelector((state)=>state.selections);
  const scheduledInterviews = useSelector(
    (state) => state.scheduledInterviews
  );
  const dispatch = useDispatch();

  const handleCancel = (index) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this session?");
   if (confirmCancel) {
    dispatch(cancelInterview(index));
    close();
   }
  };

  const [step, setStep] = useState(1); //state for opening the modals
  const credits = 5;

  // Remaining credits
  const remainingCredits = credits - scheduledInterviews.length;

 
  return (
    <div>
      {" "}
      {/*Condition to open modals when schedule a session button is clicked*/}
      {openModal ? (
        step === 1 ? (
          <InterviewTypeModal
            close={handleClose}
            setStep={setStep}
            step={step}
          />
        ) : step === 2 ? (
          <PeerTypeModal close={handleClose} setStep={setStep} step={step} />
        ) : step === 3 ? (
          <PracticeLevelModal
            close={handleClose}
            setStep={setStep}
            step={step}
          />
        ) : step === 4 ? (
          <TimeModal close={handleClose} setStep={setStep} step={step} />
        ) : step === 5 ? (
          <FinalModal close={handleClose} setStep={setStep} step={step} />
        ) : undefined
      ) : undefined}
      {/* Render Navbar only when modal is closed */}
      {!openModal && <Navbar />}
      {/* ---------------First Section----------------*/}
      <div className="text-white px-6 sm:px-10 md:px-20 flex flex-wrap items-center justify-between">
        <div className="basis-full lg:basis-3/5 mb-8 lg:mb-0">
          <p className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold">
            Practice with peers, Succeed in careers.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-8 sm:leading-9 lg:leading-10 my-6 sm:my-8 lg:my-9">
            Join thousands of tech candidates to practice mock interviews to
            land their dream job. Practice real interview questions and get
            real-time feedback.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              className="bg-purple px-4 sm:px-5 py-2 sm:py-3 rounded-full w-full sm:w-auto"
              onClick={handleOpen}
            >
              Schedule a session
            </button>
            <div className="text-sm text-orange w-full sm:w-auto text-center sm:text-left">
              <p>{remainingCredits} credits remaining</p>
              <Link className="hover:underline">Get unlimited sessions</Link>
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-2/5 flex justify-center lg:justify-end">
          <img
            src={hero_image}
            alt=""
            className="w-4/5 sm:w-3/4 lg:w-full max-w-md animate-float"
          />
        </div>
      </div>
      {/* Upcoming Interviews Section */}
      {scheduledInterviews.length > 0 && (
        <div className="text-white px-4 sm:px-10 md:px-20 mt-12">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">
            Upcoming Interviews
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-600">
              <thead>
                <tr className="text-sm sm:text-base">
                  <th className="px-2 sm:px-4 py-2">Date</th>
                  <th className="px-2 sm:px-4 py-2">Type</th>
                  <th className="px-2 sm:px-4 py-2">Questions You'll Ask</th>
                  <th className="px-2 sm:px-4 py-2"></th> {/* Cancel column */}
                </tr>
              </thead>
              <tbody>
                {scheduledInterviews.map((interview, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-700 text-sm sm:text-base"
                  >
                    <td className="px-2 sm:px-4 py-2 border border-gray-600">
                      {interview.date}, {interview.time}
                    </td>
                    <td className="px-2 sm:px-4 py-2 border border-gray-600">
                      {interview.type}
                    </td>
                    <td className="px-2 sm:px-4 py-2 border border-gray-600">
                      <a href="#" className="text-orange hover:underline">
                        Browse Questions
                      </a>
                    </td>
                    <td className="px-2 sm:px-4 py-2 border border-gray-600">
                      <button
                        className="text-orange hover:underline"
                        onClick={() => handleCancel(index)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* ---------------Second Section----------------*/}
      <div className="mt-12 text-white px-4 sm:px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="basis-full lg:basis-2/5">
          <img src={join_image} alt="" className="w-full h-auto" />
        </div>
        <div className="basis-full lg:basis-3/5">
          <p className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
            Who's <span className="text-orange">joining</span>
          </p>
          <p className="text-base sm:text-lg lg:text-2xl font-light leading-7 sm:leading-8 lg:leading-10 my-6 lg:my-9 text-center lg:text-left">
            Anyone and everyone who is involved in cloud computing can practice.
            Whether you're a beginner or seasoned professional, we offer a rich
            set of resources. From basic knowledge of AWS to complex Kubernetes
            deployments, there are thousands of questions to choose from.
          </p>
        </div>
      </div>
      {/* ---------------Third Section----------------*/}
      <div className="text-white px-4 sm:px-10 md:px-20 mt-12">
        <p className="text-2xl sm:text-3xl font-bold text-center">
          <span className="text-orange">Why </span>join
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 mt-6">
          <div className="basis-full lg:basis-3/5">
            <div className="flex items-start gap-4 sm:gap-6 my-5">
              <img
                src={chart_icon}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <p className="text-base sm:text-lg lg:text-2xl font-light leading-6 sm:leading-7 lg:leading-10">
                Practice in a safe and productive environment
              </p>
            </div>
            <div className="flex items-start gap-4 sm:gap-6 my-5">
              <img
                src={peers_icon}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <p className="text-base sm:text-lg lg:text-2xl font-light leading-6 sm:leading-7 lg:leading-10">
                Get constructive feedback from peers in real-time
              </p>
            </div>
            <div className="flex items-start gap-4 sm:gap-6 my-5">
              <img
                src={feedback_icon}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <p className="text-base sm:text-lg lg:text-2xl font-light leading-6 sm:leading-7 lg:leading-10">
                Connect with like-minded individuals and receive multiple
                perspectives on your interview skills
              </p>
            </div>
          </div>
          <div className="basis-full lg:basis-2/5">
            <img src={videocall_image} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
      {/* ---------------Fourth Section----------------*/}
      <div className="text-white px-4 sm:px-10 md:px-20 mt-12">
        <p className="text-2xl sm:text-3xl font-bold text-center">
          How it <span className="text-orange">works</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 mt-8">
          {workcards.map((workcard, index) => (
            <Workcard
              key={index}
              number={workcard.number}
              heading={workcard.heading}
              paragraph={workcard.paragraph}
            />
          ))}
        </div>
      </div>
      {/* ---------------Fifth Section----------------*/}
      <div className="text-white px-4 sm:px-10 md:px-20 mt-12 mb-16 sm:mb-20 lg:mb-24">
        <p className="text-orange text-2xl sm:text-3xl font-bold text-center">
          Testimonials
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 mt-8">
          {testimonialCards.map((test_cards, index) => (
            <TestimonialCard
              key={index}
              test_pic={test_cards.test_pic}
              test_name={test_cards.test_name}
              test_profession={test_cards.test_profession}
              test_company={test_cards.test_company}
              testimonial={test_cards.testimonial}
            />
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer
        className="py-8 mt-24 bg-[right_100%] bg-cover bg-no-repeat w-full"
        style={{ backgroundImage: `url(${bottom_vector})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            {/* Icon */}
            <div className="bg-orange w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center rounded-full">
              <img
                src={bottom_icon} // Replace with the path to your purple icon
                alt="Logo Icon"
                className="w-5 sm:w-6 h-7 sm:h-8"
              />
            </div>
          </div>
          <h2 className="text-orange text-lg sm:text-xl font-bold mt-6 sm:mt-8">
            Wanda<span className="font-light">Forum</span>
          </h2>
          <div className="mt-4 flex flex-wrap justify-center space-x-4 sm:space-x-6 text-white">
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
          <div className="mt-6 sm:mt-8 flex justify-center space-x-3 sm:space-x-4 text-orange">
            <a href="#" className="hover:text-white">
              <AiOutlineFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <AiOutlineLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="text-gray-500 mt-6 sm:mt-8 text-sm sm:text-base">
            © 2024 Wandaprep
            <br /> All Rights Reserved
          </p>
          <p className="text-orange mt-2 text-xs sm:text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PeermockHome;
