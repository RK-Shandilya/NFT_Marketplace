import React, { useState } from "react";
import Layout from "../Layout";
import StakeCard from "../components/Explore/StakeCard";
import NFTStakeDetail from "../components/Explore/NFTStakeDetail";
import { bg } from "../assets/Explore";
import { polygonNFTData } from "../data/nftdetail";
import { stakingData, freeZoneData } from "../data/staking_freezone";
import PolygonNftCard from "../components/Explore/PolygonNftCard";

const Explore = () => {
  const [activeZone, setActiveZone] = useState("Exclusive");
  const [activeTab, setActiveTab] = useState("Stake");
  const [activeSubTab, setActiveSubTab] = useState("Stake");
  const [selectedStake, setSelectedStake] = useState(null);

  // Handle Tab Click
  const handleTabClick = (tab) => {
    if (selectedStake) {
      setSelectedStake(null);
    }
    setActiveTab(tab);
    // Reset sub-tab when main tab changes
    setActiveSubTab(tab === "Stake" ? "Stake" : "Collection");
  };

  // Handle Sub-Tab Click
  const handleSubTabClick = (subTab) => {
    if (selectedStake) {
      setSelectedStake(null);
    }
    setActiveSubTab(subTab);
  };

  // Handle Stake Click
  const handleStakeClick = (stakeData) => {
    setSelectedStake(stakeData);
  };

  // Handle Back to Stakes
  const handleBackToStakes = () => {
    setSelectedStake(null);
  };

  return (
    <Layout >
      <div className="mx-auto bg-cover bg-center bg-no-repeat">
        {/* Header */}
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4 px-16 pt-30">
          Explore
        </h1>

        {/* Navigation Tabs */}
        <div className="bg-white w-full px-4 lg:px-16 py-4 lg:py-8">
          {!selectedStake && (
            <>
              <div className="flex overflow-x-auto gap-4 lg:gap-6 border-b border-gray-200 text-gray-600">
                <span
                  className={`p-2 cursor-pointer whitespace-nowrap ${
                    activeTab === "Stake"
                      ? "text-black font-semibold border-b-6 border-blue-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Stake")}
                >
                  Stake
                </span>
                <span
                  className={`p-2 cursor-pointer whitespace-nowrap ${
                    activeTab === "Polygon NFT"
                      ? "text-black font-semibold border-b-6 border-blue-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Polygon NFT")}
                >
                  Polygon NFT
                </span>
                <span
                  className={`p-2 cursor-pointer whitespace-nowrap ${
                    activeTab === "Art"
                      ? "text-black font-semibold border-b-6 border-blue-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Art")}
                >
                  Art
                </span>
                <span
                  className={`p-2 cursor-pointer whitespace-nowrap ${
                    activeTab === "Collectibles"
                      ? "text-black font-semibold border-b-6 border-blue-900"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Collectibles")}
                >
                  Collectibles
                </span>
              </div>

              {/* Sub Navigation */}
              {activeTab === "Stake" && (
                <div className="flex overflow-x-auto gap-4 lg:gap-6 my-4 text-gray-500 border-b border-gray-200">
                  <span
                    className={`p-2 cursor-pointer whitespace-nowrap ${
                      activeSubTab === "Stake"
                        ? "text-black font-semibold border-b-3 border-blue-900"
                        : ""
                    }`}
                    onClick={() => handleSubTabClick("Stake")}
                  >
                    Stake
                  </span>
                  <span
                    className={`p-2 cursor-pointer whitespace-nowrap ${
                      activeSubTab === "Collection"
                        ? "text-black font-semibold  border-b-3 border-blue-900"
                        : ""
                    }`}
                    onClick={() => handleSubTabClick("Collection")}
                  >
                    Collection
                  </span>
                  <span
                    className={`p-2 cursor-pointer whitespace-nowrap ${
                      activeSubTab === "My Stake"
                        ? "text-black font-semibold border-b-3 border-blue-900"
                        : ""
                    }`}
                    onClick={() => handleSubTabClick("My Stake")}
                  >
                    My Stake
                  </span>
                </div>
              )}

              {/* Zones */}
              {activeTab === "Stake" && activeSubTab === "Stake" && (
                <div className="flex gap-4 lg:gap-6 mb-4 p-3 text-blue-900">
                  <span
                    className={`font-semibold pb-2 cursor-pointer whitespace-nowrap ${
                      activeZone === "Exclusive" ? "border-b-2 border-blue-900" : ""
                    }`}
                    onClick={() => setActiveZone("Exclusive")}
                  >
                    Exclusive Zone
                  </span>
                  <span
                    className={`cursor-pointer whitespace-nowrap ${
                      activeZone === "Free" ? "border-b-2 border-blue-900" : ""
                    }`}
                    onClick={() => setActiveZone("Free")}
                  >
                    Free Zone
                  </span>
                </div>
              )}
            </>
          )}

          {/* Stake Detail View */}
          {selectedStake ? (
            <NFTStakeDetail stakeData={selectedStake} onBack={handleBackToStakes} />
          ) : (
            <>
              {/* Cards */}
              {activeTab === "Stake" && activeSubTab === "Stake" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 text-sm">
                  {(activeZone === "Exclusive" ? stakingData : freeZoneData).map(
                    (stake) => (
                      <StakeCard 
                        key={stake.id} 
                        data={stake} 
                        onStakeClick={handleStakeClick}
                      />
                    )
                  )}
                </div>
              )}

              {/* Placeholder for Other Tabs */}
              {activeTab === "Polygon NFT" && (
                <div className="my-8 flex flex-wrap gap-2 text-center text-gray-500">
                  {polygonNFTData.map((nft) => (
                    <PolygonNftCard key={nft.id} data={nft} />
                  ))}
                </div>
              )}

              {activeTab === "Art" && (
                <div className="my-8 flex flex-wrap gap-4 text-center text-gray-500">
                  {polygonNFTData.map((nft) => (
                    <PolygonNftCard key={nft.id} data={nft} />
                  ))}
                </div>
              )}

              {activeTab === "Collectibles" && (
                <div className="my-8 flex flex-wrap gap-4 text-center text-gray-500">
                  {polygonNFTData.map((nft) => (
                    <PolygonNftCard key={nft.id} data={nft} />
                  ))}
                </div>
              )}

              {/* Placeholder for Other Sub-Tabs */}
              {activeTab === "Stake" && activeSubTab !== "Stake" && (
                <div className="my-8 text-center text-gray-500">
                  Content for {activeSubTab} will be displayed here.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Explore;