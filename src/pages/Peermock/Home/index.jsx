import React from "react";
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

function PeermockHome() {
  const workcards = [
    {
      number: number_one ,
      heading: "Schedule a session",
      paragraph: "Join today or pre-schedule a practice session that suits youravailability, skills and experience.",
    },
    {
      number: number_two ,
      heading: "Get paired",
      paragraph: "Get paired automatically with peer preparing for similar interviews. Take turns playing the roles of interviewer and interviewee.",
    },
    {
      number: number_three,
      heading: "Share Feedback",
      paragraph: "Exchange  keynotes with partner after the session to improve for next time.",
    },
  ];

  const testimonialCards = [
    {
      test_pic: number_one ,
      test_name: "Jane",
      test_profession: "Frontend Developer",
      test_company:'Wandaprep',
      testimonial:'Peer-peer mock interviews are the real deal. I totally recommend.',
    },
    {
      test_pic: number_one ,
      test_name: "Kelly",
      test_profession: "Devops Specialist",
      test_company:'Wandaprep',
      testimonial:'Peer-peer mock interviews are the real deal. I totally recommend.',
    },
    {
      test_pic: number_one ,
      test_name: "Angela",
      test_profession: "UI/UX Designer",
      test_company:'Wandaprep',
      testimonial:'Peer-peer mock interviews are the real deal. I totally recommend.',
    },
  ];


  return (
    <div>
      <Navbar />

      {/* ---------------First Section----------------*/}
      <div className="text-white px-20 flex items-center justify-between">
        <div className="basis-3/5">
          <p className=" text-6xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold ">
            Practice with peers, Succeed in careers.
          </p>
          <p className="text-2xl font-light leading-10 my-9">
            Join thousands of tech candidates to practice mock interviews to
            land their dream job. Practice real interview questions and get
            real-time feedback.
          </p>
          <button className="bg-purple px-4 py-3 rounded-full">
            Schedule a session
          </button>
        </div>
        <div className="basis-2/5">
          <img src={hero_image} alt="" className=" " />
        </div>
      </div>

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
          <span className="text-orange">Why </span>join
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
        <p className="text-orange text-3xl  font-bold text-center">Testimonials</p>
        <div className="grid grid-cols-3 gap-20">
           {testimonialCards.map((test_cards, index)=>(
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
