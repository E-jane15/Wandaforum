import React, { useState } from 'react';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handlePasswordReset = async () => {
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            // Simulate an API call to send the password reset email
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setMessage(`Password reset email sent to ${email}`);
        } catch (err) {
            setError("Failed to send password reset email. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
                <h2 className="text-xl font-semibold text-gray-800">Reset Your Password</h2>
                <p className="text-gray-600 mt-2">
                    Enter your email address to receive a password reset link.
                </p>
                
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className={`mt-4 p-2 border rounded w-full ${error ? "border-red-500" : "border-gray-300"}`}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <button 
                    className={`mt-4 py-2 px-4 rounded text-white w-full ${loading ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-700"}`} 
                    onClick={handlePasswordReset}
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Password Reset Email"}
                </button>

                {message && <p className="text-green-500 mt-2">{message}</p>}
            </div>
        </div>
    );
};

export default PasswordReset;
