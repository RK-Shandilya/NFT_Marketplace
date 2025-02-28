import React from "react";
import Layout from "../Layout";
import { bg } from "../assets/Explore";

const Message = () => {
  return (
    <Layout >
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4 px-16 pt-30">
        Message
      </h1>
      <div className="w-full min-h-screen p-4 bg-white text-black">
        <div className="max-w-6xl mx-auto bg-white p-4 md:p-6 shadow-md rounded-lg">
          <div className="flex flex-col md:flex-row mt-4">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-300">
              <h3 className="font-semibold text-lg flex items-center">
                <span className="border-l-4 border-teal-500 mr-2"></span>
                Customer Notification
              </h3>
            </div>

            {/* Notification List */}
            <div className="w-full md:w-3/4 p-4">
              <div className="flex justify-between items-center text-gray-500">
                <span className="font-semibold">Notification List</span>
                <span className="text-teal-500 cursor-pointer">All Read</span>
              </div>
              <div className="mt-2 border-t border-gray-300 h-32 flex items-center justify-center text-gray-400">
                No notifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Message;
