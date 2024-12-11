import React from "react";

// ====================Popup component
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={props.closeModal}>Close</button>
        {props.children}
      </div>
    </div>
  ) : null;  
}

// ========================DeleteAccountModal component
const DeleteAccountModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Delete Account</h2>
          <button onClick={closeModal} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>
        <p className="text-gray-700 mb-4">
          To delete your account, you need to create a password first.
        </p>
        <p className="text-gray-700 mb-6">
          To add a password to your account, click the button below to email a
          password reset link.
        </p>

        <div>
          <button className="bg-purple text-white py-2 px-4 rounded hover:bg-yellow-500">Send Reset Email</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
