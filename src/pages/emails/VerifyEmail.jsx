import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const VerifyEmail = () => {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/your-background-image.jpg)' }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
                <div className="text-center mb-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 text-3xl" aria-label="Envelope Icon" />
                    <h1 className="text-2xl font-bold text-purple2 mt-2">Verify your email address</h1>
                </div>
                <p className="text-green-800 mb-4">
                    Thanks for starting the new wandaforum creation process. We want to make sure it's really you. Please enter the following verification code when prompted. If you don't want to create an account, you can ignore this message.
                </p>
                <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-4">
                    <p className="font-semibold text-purple-800">Verification code</p>
                    <p className="text-2xl font-bold text-yellow-600">596853</p>
                    <p className="text-gray-600">(This code is valid for 10 minutes)</p>
                </div>
                <p className="text-green-700">
                  Wandaforum will never email you and ask you to disclose or verify your password, credit card, or banking account number.
                </p>
            </div>
        </div>
    );
};
export default VerifyEmail;
