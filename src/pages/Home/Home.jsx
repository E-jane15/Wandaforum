import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

function HomeScreen() {
  return (
    <>
      <Navbar />
      <div className="text-white px-20 flex items-center justify-between">
        <div className="basis-4/5">
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
        <div className="basis-2/5">
          <img src={hero_image2} alt="" className=" " />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
