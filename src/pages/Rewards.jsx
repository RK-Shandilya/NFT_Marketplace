import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import Layout from "../Layout";

import {
  airdrop,
  lv1,
  lv2,
  lv3,
  lv4,
  lv5,
  comingSoon,
  lv1main,
  lv2main,
  lv3main,
  lv4main,
  lv5main,
} from "../assets/airdrop/index.js";

const LevelUpReward = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState("level-up");

  const levels = [
    { id: 1, image: lv1, mainImage: lv1main, locked: false },
    { id: 2, image: lv2, mainImage: lv2main, locked: true },
    { id: 3, image: lv3, mainImage: lv3main, locked: true },
    { id: 4, image: lv4, mainImage: lv4main, locked: true },
    { id: 5, image: lv5, mainImage: lv5main, locked: true },
  ];

  const [selectedLevel, setSelectedLevel] = useState(levels[0]);

  return (
    <Layout style={{ background: "white" }}>
      <div className="w-full min-h-screen bg-black text-white mt-20">
        {/* Tabs */}
        <div className="flex border-b border-gray-800 pt-4 md:pt-8 px-4 md:px-8">
          <button
            className={`px-3 md:px-4 py-2 md:py-3 text-sm md:text-base ${
              activeTab === "level-up"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("level-up")}
          >
            Level-up reward
          </button>
          <button
            className={`px-3 md:px-4 py-2 md:py-3 text-sm md:text-base ${
              activeTab === "bonus"
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("bonus")}
          >
            Bonus pool
          </button>
        </div>

        {activeTab === "level-up" ? (
          <div className="w-full flex flex-col md:grid md:grid-cols-24 gap-4 mt-5">
            {/* Left sidebar - Level selection (4 columns on desktop, full width on mobile) */}
            <div className="md:col-span-4 py-3 md:py-6 md:pt-10 overflow-x-auto md:overflow-x-visible">
              <div className="flex md:flex-col min-w-max md:min-w-0">
                {levels.map((level) => (
                  <div
                    key={level.id}
                    className={`mr-4 md:mr-0 md:mb-8 ${
                      selectedLevel.id === level.id
                        ? "opacity-100"
                        : "opacity-50"
                    } cursor-pointer`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    <div
                      className={`flex items-center space-x-2 p-2 ${
                        selectedLevel.id === level.id
                          ? "bg-gradient-to-r from-cyan-900/30 to-black border-l-4 border-cyan-500"
                          : ""
                      }`}
                    >
                      <img
                        src={level.image}
                        alt={`Level ${level.id}`}
                        className="w-12 h-10 md:w-18 md:h-14"
                      />
                      <span className="text-lg md:text-2xl text-gray-300">
                        LV{level.id}
                      </span>
                      {level.locked && (
                        <div className="ml-2 bg-transparent rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 md:h-5 md:w-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="3"
                              y="11"
                              width="18"
                              height="11"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Chest display (10 columns on desktop, full width on mobile) */}
            {selectedLevel && (
              <div className="md:col-span-10 flex items-center justify-center p-4 md:p-0">
                <img
                  src={selectedLevel.mainImage}
                  alt="Reward chest"
                  className="w-4/5 md:w-full h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.3))",
                  }}
                />
              </div>
            )}

            {/* Right panel - Image with text overlay (10 columns on desktop, full width on mobile) */}
            <div className="md:col-span-10 relative min-h-56 md:min-h-0">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={airdrop}
                  alt="Airdrop background"
                  className="w-full h-full md:h-198 object-cover md:object-fill md:absolute md:-top-20 md:right-0"
                />
              </div>

              {/* Text and Button Overlay */}
              <div className="relative z-10 flex flex-col justify-center items-center md:items-start h-full px-6 md:px-0 ">
                <div className="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-30 text-center md:w-1/2 md:px-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-light text-cyan-300 leading-tight">
                      Level-up
                      <br />
                      <div className="mt-3">reward</div>
                    </h2>
                    <HelpCircle
                      className="text-gray-500 hover:text-cyan-300 cursor-pointer"
                      size={24}
                    />
                  </div>

                  <button className="mt-4 md:mt-8 w-full py-2 md:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-blue-600 transition-all">
                    Open
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-10">
            <div className="w-full relative min-h-[80vh] px-4 sm:px-8 lg:px-20">
              {/* Background Image */}
              <img
                src={comingSoon}
                alt="Coming Soon"
                className="w-full h-auto object-cover md:py-25"
              />

              {/* Content Overlay */}
              <div className="w-full sm:w-2/3 absolute top-1/2 md:top-1/3 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-start justify-center gap-4 sm:gap-8 px-4 sm:pl-28 py-8 sm:py-38">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold w-full text-center sm:text-left">
                  Coming Soon
                </h1>

                {/* Description */}
                <div className="text-sm sm:text-lg text-gray-400 w-full sm:w-4/5 text-center sm:text-left">
                  Join our mailing list to stay in the loop with our newest
                  feature releases, NFT listing, tips and tricks for navigating
                  Treasure webpage.
                </div>

                {/* Input and Button */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full sm:w-64 px-4 py-2 rounded-2xl border border-gray-300"
                  />
                  <button className="w-full sm:w-auto px-4 py-2 bg-cyan-500 text-white rounded-2xl hover:bg-cyan-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LevelUpReward;
