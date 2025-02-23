import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  stake,
} from "../../assets/landingPage/discover_nft";
import { sign } from "../../assets/landingPage/nft";

const categories = ["Polygon NFT", "Art", "Collectibles", "Gaming"];

const DiscoverNFTs = () => {
  const [direction, setDirection] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nfts = [
    { id: "196270", price: "228 USDT", img: nft1 },
    { id: "375814", price: "228 USDT", img: nft2 },
    { id: "542718", price: "228 USDT", img: nft3 },
    { id: "133736", price: "228 USDT", img: nft4 },
    { id: "196271", price: "228 USDT", img: nft5 },
    { id: "375815", price: "228 USDT", img: nft6 },
    { id: "542719", price: "228 USDT", img: nft7 },
    { id: "133737", price: "228 USDT", img: nft8 },
  ];

  // Handle Category Click (acts as Next/Prev)
  const handleCategoryClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 px-14">
      {/* Header Section */}
      <div className="flex flex-col justify-between items-start mb-8 gap-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
          DISCOVER MORE NFTS
        </h1>

        {/* Category Buttons */}
        <div className="flex justify-between w-full">
          <div className="flex space-x-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(index)}
                className={`px-4 py-2 rounded-full text-sm ${
                  currentIndex === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                } hover:bg-gray-200 transition-all`}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-all">
            All Filters
          </button>
        </div>
      </div>

      {/* NFT Display with Animation */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {nfts.map((nft) => (
              <motion.div
                key={nft.id}
                className="bg-white rounded-3xl p-3 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square mb-4">
                  <img
                    src={nft.img}
                    alt={`NFT ${nft.id}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <img
                    src={stake}
                    alt="Stake logo"
                    className="absolute bottom-1 left-3 w-10 h-10 rounded-2xl"
                  />
                </div>

                <div className="px-2">
                  <h3 className="text-lg font-semibold mb-2">NFT_{nft.id}</h3>
                  <div className="flex items-center space-x-2">
                    <img src={sign} alt="Token" className="w-5 h-5" />
                    <span className="text-gray-600">{nft.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full mt-8 flex justify-center">
        <button className=" p-3 px-6 rounded-full bg-linear-90 from-[rgba(153,188,255)] via-[rgba(153,255,250)] to-[rgba(255,214,199)] text-sm md:text-base font-semibold text-black">Discover More</button>
      </div>
    </div>
  );
};

export default DiscoverNFTs;