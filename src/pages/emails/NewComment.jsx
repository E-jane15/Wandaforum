import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const NewCommentNotificationEmail = ({ postTitle, commenterName, commentContent, postUrl, commentDate, previousCommentsCount }) => {
  return (
    <div className="bg-white border-orange p-6 sm:p-8">
      <div className="max-w-2xl mx-auto bg-purple-400  border-orange rounded-lg shadow-md">
        {/* Header Section */}
        <div className="border-b p-6 text-center">
          <h1 className="text-3xl font-semibold text-purple2 animate-bounce ">From WandaForum</h1>
          <p className="mt-2 ">You have a new comment on your post on Devops!</p>
        </div>
        
        {/* Body Section */}
        <div className="px-6 py-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComment} className="text-blue-600 text-2xl mr-3" />
            <h2 className="text-xl font-medium">New Comment from Ayamba on cloud devops {commenterName}</h2>
          </div>

          <div className="mt-4">
            <p className="text-gray-700">On your post: <span className="font-semibold">{postTitle}</span></p>
            <p className="mt-2 text-green-900">"{commentContent}"  Cloud computing is the delivery of computing services—like storage, processing power, databases, networking, software, and analytics—over the internet, often referred to as "the cloud."</p>
            <p className="mt-2 text-gray-500 text-sm">Commented on:  12 July 2025 <span className="font-semibold">{new Date(commentDate).toLocaleString()}</span></p>
            {previousCommentsCount && (
              <p className="mt-2 text-gray-500 text-sm">
                There have been <span className="font-semibold">{previousCommentsCount}</span> previous comments.
              </p>
            )}
          </div>

          <div className="mt-6 text-center">
            <a
              href={postUrl}
              className="bg-purple2-600 text-white py-2 px-4 rounded-lg inline-block text-lg hover:bg-yellow-500"
            >
              View Comment
            </a>
          </div>
        </div>

        {/* Engagement Section */}
        <div className="mt-6 px-6 py-4 border-t">
          <div className="flex justify-between items-center text-gray-600">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-purple2-600" />
              <span>Like</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShareAlt} className="mr-2 text-purple2-600" />
              <span>Share</span>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-6 p-6 text-center text-sm text-gray-500">
          <p>Don't want to receive these notifications? <a href="#" className="text-blue-500">Unsubscribe</a></p>
          <p className="mt-4">Need help? <a href="mailto:support@wandaforum.com" className="text-purple2">Contact support</a></p>
          <p className="mt-4">Follow us on <a href="#" className="text-blue-500">Twitter</a> | <a href="#" className="text-blue-500">Facebook</a> | <a href="#" className="text-blue-500">Instagram</a></p>
          <p className="mt-2 text-gray-400">© 2025 WandaForum. All rights reserved. | <a href="#" className="text-blue-500">Privacy Policy</a> | <a href="#" className="text-blue-500">Terms of Service</a></p>
        </div>
      </div>
    </div>
  );
};

export default NewCommentNotificationEmail;
