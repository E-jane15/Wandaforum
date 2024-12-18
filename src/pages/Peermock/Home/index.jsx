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
import { useSelector, useDispatch } from "react-redux";
import { cancelInterview } from "../../../redux/selectionSlice";


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
    <div>  {/*Condition to open modals when schedule a session button is clicked*/}
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
        ) : step === 5 ? (<FinalModal close={handleClose} setStep={setStep} step={step}/>) :undefined
      ) : undefined}
      <Navbar />

      {/* ---------------First Section----------------*/}
      <div className="text-white px-20 flex items-center justify-between ">
        <div className="basis-3/5">
          <p className=" text-6xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold ">
            Practice with peers, Succeed in careers.
          </p>
          <p className="text-2xl font-light leading-10 my-9">
            Join thousands of tech candidates to practice mock interviews to
            land their dream job. Practice real interview questions and get
            real-time feedback.
          </p>
          <div className="flex items-center gap-4">
          <button
            className="bg-purple px-5 py-3 rounded-full"
            onClick={handleOpen}
          >
            Schedule a session
          </button>
          <div className="text-sm text-orange">
            <p>{remainingCredits} credits remaining</p>
            <Link className="hover:underline">Get unlimited sessions</Link>
          </div>
          </div>
        </div>
        <div className="basis-2/5">
          <img src={hero_image} alt="" className=" " />
        </div>
      </div>

      {/* Upcoming Interviews Section */}
{scheduledInterviews.length > 0 && (
  <div className="text-white px-20 mt-12">
    <p className="text-2xl font-bold">Upcoming Interviews</p>
    <div className="mt-6">
      <table className="table-auto w-full border-collapse border border-gray-600">
        <thead className="">
          <tr>
            <th className="px-4 py-2 ">Date</th>
            <th className="px-4 py-2 ">Type</th>
            <th className="px-4 py-2 ">Questions You'll Ask</th>
            <th className="px-4 py-2 "></th> {/* Cancel column with no heading */}
          </tr>
        </thead>
        <tbody>
        {scheduledInterviews.map((interview, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="px-4 py-2 border border-gray-600">
                      {interview.date}, {interview.time}
                    </td>
                    <td className="px-4 py-2 border border-gray-600">
                      {interview.type}
                    </td>
                    <td className="px-4 py-2 border border-gray-600">
                      <a href="#" className="text-orange hover:underline">
                        Browse Questions
                      </a>
                    </td>
                    <td className="px-4 py-2 border border-gray-600">
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
      <div className="mt-12 text-white px-20 flex items-center justify-between gap-20">
        <div className="basis-2/5">
          <img src={join_image} alt="" />
        </div>
        <div className="basis-3/5">
          <p className=" text-3xl  font-bold ">
            Who's <span className="text-orange">joining</span>
          </p>
          <p className=" text-2xl font-light leading-10 my-9">
            Anyone and everyone who is involved in cloud computing can practice.
            Whether you're a beginner or seasoned professional, we offer a rich
            set of resources. From basic knowledge of AWS to complex Kubernetes
            deployments, there are thousands of questions to choose from.
          </p>
        </div>
      </div>

      {/* ---------------Third Section----------------*/}
      <div className="text-white px-20 mt-12">
        <p className=" text-3xl  font-bold text-center  ">
          <span className="text-orange">Why</span>join
        </p>
        <div className="flex items-center justify-between">
          <div className="basis-3/5">
            <div className="flex items-center gap-6 my-5">
              <img src={chart_icon} alt="" />
              <p className=" text-2xl font-light">
                Practice in a safe and productive environment
              </p>
            </div>
            <div className="flex items-center gap-6 my-5">
              <img src={peers_icon} alt="" />
              <p className=" text-2xl font-light">
                Get constructive feedback from peers in real-time
              </p>
            </div>
            <div className="flex items-center gap-6 my-5">
              <img src={feedback_icon} alt="" />
              <p className=" text-2xl font-light">
                Connect with like-minded individuals and receive multiple
                perspectives on your interview skills{" "}
              </p>
            </div>
          </div>
          <div className="basis-2/5">
            <img src={videocall_image} alt="" />
          </div>
        </div>
      </div>

      {/* ---------------Fourth Section----------------*/}
      <div className="text-white px-20 mt-20">
        <p className=" text-3xl  font-bold text-center">
          How it <span className="text-orange">works</span>
        </p>
        <div className="grid grid-cols-3 gap-20">
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
      <div className="text-white px-20 mt-20 mb-20">
        <p className="text-orange text-3xl  font-bold text-center">
          Testimonials
        </p>
        <div className="grid grid-cols-3 gap-20">
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
    </div>
  );
}

export default PeermockHome;
