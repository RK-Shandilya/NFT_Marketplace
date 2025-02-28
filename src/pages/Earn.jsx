import React from "react";
import { HelpCircle } from "lucide-react";
import soon from "../assets/Earn/soon.webp";
import { bg } from "../assets/Explore";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";

const Earn = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen bg-white flex flex-col justify-center">
          {/* Top Section */}
          <div className="relative bg-blue-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-4 lg:px-16 pt-25">
            {/* Profile Info */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Profile Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={soon}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* User Details */}
              <div className="flex flex-col gap-2 sm:gap-4 pb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">f451028c9538</h2>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                  <p className="text-gray-100 text-xs sm:text-sm">
                    0 Points
                  </p>
                  <p className="text-gray-100 text-xs sm:text-sm">Level Information</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coming Soon Section */}
          <div className="relative flex flex-col h-full items-center justify-center px-4 sm:px-0">
            <button className="absolute -top-10 right-10 px-4 sm:px-8 py-2 sm:py-3 bg-gray-200 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-gray-300 transition"
            onClick={()=> navigate('/depositNFT')}
            >
              Deposit NFT
            </button>
            <img src={soon} alt="Coming Soon" className="w-24 h-24 sm:w-32 sm:h-32" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-4">
              Coming Soon
            </h2>
            <p className="text-gray-500 mt-2 text-center text-sm sm:text-base max-w-xs sm:max-w-md">
              More profit opportunities are on the way, please stay tuned.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Earn;