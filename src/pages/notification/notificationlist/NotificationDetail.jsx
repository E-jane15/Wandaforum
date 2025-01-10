import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const NotificationDetail = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Notification Title</h1>
                <p className="text-gray-600 mb-4">
                   you have an updates about  other users and your account activation.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                    Received on: December 13, 2024, 10:00 AM
                </p>
                <div className="flex justify-between mt-6">
                    <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Dismiss
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Take Action
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationDetail;