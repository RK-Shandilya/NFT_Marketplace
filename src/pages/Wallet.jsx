import React from "react";
import deposit from "../assets/Earn/deposit.webp";
import Layout from "../Layout";
import { bg } from "../assets/Explore";

const Wallet = () => {
  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4 px-16 pt-30">
        Wallet
      </h1>
      <div className="flex flex-col md:flex-row gap-4 bg-white mx-auto p-10">
        <div className="max-w-5xl mx-auto p-4 ">
          {/* Assets Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Assets(USDT)</h1>

            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-2">
                  T
                </div>
                <span className="font-medium">USDT</span>
              </div>
              <span className="text-2xl font-bold">18.28</span>
            </div>

            {/* Earnings Section */}
            <div className="flex space-x-8 mb-8">
              <div>
                <div className="text-gray-600 mb-1">Total Earnings</div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-1">
                    T
                  </div>
                  <span className="font-medium">2.29</span>
                </div>
              </div>

              <div>
                <div className="text-gray-600 mb-1">Withdrawn</div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-1">
                    T
                  </div>
                  <span className="font-medium">0</span>
                </div>
              </div>

              <div>
                <div className="text-gray-600 mb-1">Undrawn</div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-1">
                    T
                  </div>
                  <span className="font-medium">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deposit Addresses */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="mb-4">
              <div className="relative mb-4">
                <select className="w-full p-3 border rounded-lg appearance-none pr-10">
                  <option>Node 1</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div className="absolute inset-y-0 right-10 flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-gray-400 border border-gray-300">
                    ?
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="font-medium">
                    USDT Deposit Address(BEP-20)
                  </span>
                  <span className="ml-2">👁️‍🗨️</span>
                </div>
                <div className="py-2 px-4 bg-gray-50 rounded border border-gray-200 text-gray-500">
                  ********************************
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">
                  USDT Deposit Address(TRC-20)
                </div>
                <div className="py-2 px-4 bg-gray-50 rounded border border-gray-200 text-gray-500">
                  ********************************
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-8">
            <div className="flex-1 bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8v8M8 12h8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-medium">Deposit</span>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path d="M8 12h8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-medium">Withdraw</span>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
              <div className="mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                  <path
                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="font-medium">Settings</span>
            </div>
          </div>

          {/* Fiat Deposit Button */}
          <div className="mb-8">
            <button className="w-full py-3 px-6 text-center text-white font-medium rounded-lg bg-gradient-to-r from-blue-300 to-pink-100">
              Deposit in fiat currency
            </button>
          </div>

          {/* History Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">History</h2>
              <div className="text-blue-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="font-medium">Trial fund</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 font-medium mr-2">+150</span>
                  <span className="bg-green-500 text-white text-xs py-1 px-2 rounded">
                    Success
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500">2025/02/20 23:25:16</div>
            </div>
          </div>

          {/* Help Button */}
          <div className="fixed bottom-4 right-4">
            <button className="w-12 h-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
              <span>Help</span>
            </button>
          </div>
        </div>
        <img src={deposit} alt="Background" className="w-full h-full md:w-1/2 md:h-1/2 " />
      </div>
    </Layout>
  );
};

export default Wallet;
