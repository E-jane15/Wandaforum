import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome

const AccountApproval = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-900 text-white">
      <h1 className="text-2xl font-bold mb-4">WandaPrep Designs</h1>
      <h2 className="text-xl font-semibold mb-6">ACCOUNT APPROVAL</h2>

      <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
        <h3 className="text-lg mb-4">Hi James,</h3>
        <p className="mb-6">
          Your Prepmeets account has been approved!
        </p>

        <div className="flex justify-center mb-4">
          <i className="fa fa-check-circle text-purple-900 text-4xl"></i>
        </div>

        <p className="mb-4">
          You can now access your Prepmeets account and start connecting!
        </p>

        <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
          Get Started
        </button>

        <footer className="mt-6 text-sm text-gray-600">
          Copyright © 2023 <br />
          Powered by wandaprepare.com
        </footer>

        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2"><i className="fa fa-facebook text-purple-600"></i></a>
          <a href="#" className="mx-2"><i className="fa fa-twitter text-purple-600"></i></a>
          <a href="#" className="mx-2"><i className="fa fa-linkedin text-purple-600"></i></a>
        </div>
      </div>
    </div>
  );
};

export default AccountApproval;