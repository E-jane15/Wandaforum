import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const ReferralSection = () => {
  const [email, setEmail] = useState("");
  const referralLink = "https://www.wandaprep.com/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const handleSendInvite = () => {
    if (email) {
      alert(`Invite sent to ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
    <Navbar/>
      <div className="bg-purple5 text-orange p-8 md:p-12 max-w-4xl mx-auto rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Get free lifetime access 🎁
        </h1>
        <p className="text-center text-white mb-8">
          Share your 10% discount with four friends and get free lifetime access
          to Wandaforum!
        </p>

        {/* Referral Link Section */}
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">
              Your personal invite link
            </p>
            <div className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2">
              <span className="text-gray-800 overflow-hidden">
                {referralLink}
              </span>
              <button
                className="text-purple font-medium ml-4"
                onClick={handleCopyLink}
              >
                Copy link
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">or</p>

          {/* Invite by Email Section */}
          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full md:w-2/3 mx-auto  text-gray-600 block border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={handleSendInvite}
              className="bg-purple text-white mt-4 px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Send Invite
            </button>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold mb-2">Your Rewards</h2>
          <p className="text-white">
            You don't have any rewards yet! Keep sharing the word and we will
            let you know when someone signs up!
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-center mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg">Share the Link</h3>
                <p className="text-white">
                  Share your link with friends and they'll get 10% off all
                  Wandaforum memberships.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg">Get Rewarded</h3>
                <p className="text-white">
                  Get free lifetime access after four of your friends join using
                  your link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralSection;
