import React, { useState } from "react";
import Layout from "../Layout";
import StakeCard from "../components/Explore/StakeCard";
import { bg } from "../assets/Explore";
import { polygonNFTData } from "../data/nftdetail";
import {
  offer1,
  offer2,
  offer3,
  offer4,
  offer5,
  offer6,
} from "../assets/Explore/exclusive_zone";
import PolygonNftCard from "../components/Explore/PolygonNftCard";

const stakingData = [
  {
    id: 1,
    title: "Exclusive Stake1",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "199~1000",
    income: "1.5%",
    fee: "1%",
    image: offer1,
  },
  {
    id: 2,
    title: "Exclusive Stake2",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "499~2000",
    income: "1.8%",
    fee: "1%",
    image: offer2,
  },
  {
    id: 3,
    title: "Exclusive Stake3",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "799~3000",
    income: "2.1%",
    fee: "1%",
    image: offer3,
  },
  {
    id: 4,
    title: "Exclusive Stake4",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "999~4000",
    income: "2.5%",
    fee: "1%",
    image: offer4,
  },
  {
    id: 5,
    title: "Exclusive Stake5",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "1499~5000",
    income: "3%",
    fee: "1%",
    image: offer5,
  },
  {
    id: 6,
    title: "Exclusive Stake6",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "1999~6000",
    income: "3.5%",
    fee: "1%",
    image: offer6,
  },
];

const freeZoneData = [
  {
    id: 1,
    title: "Free Zone1",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "199~1000",
    income: "1.5%",
    fee: "1%",
    image: offer1,
  },
  {
    id: 2,
    title: "Free Zone2",
    level: "LV2~LV6",
    discount: "8% OFF",
    status: "Open",
    priceRange: "499~2000",
    income: "1.8%",
    fee: "1%",
    image: offer2,
  },
];

const Explore = () => {
  const [activeZone, setActiveZone] = useState("Exclusive");
  const [activeTab, setActiveTab] = useState("Stake");
  const [activeSubTab, setActiveSubTab] = useState("Stake");

  // Handle Tab Click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Reset sub-tab when main tab changes
    setActiveSubTab(tab === "Stake" ? "Stake" : "Collection");
  };

  // Handle Sub-Tab Click
  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
  };

  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto bg-cover bg-center bg-no-repeat">
        {/* Header */}
        <h1 className="text-3xl font-semibold mb-4 px-16 pt-30">Explore</h1>

        {/* Navigation Tabs */}
        <div className="bg-white w-full px-16 py-8">
          <div className="flex gap-6 border-b border-gray-200 text-gray-600">
            <span
              className={`p-2 cursor-pointer ${
                activeTab === "Stake"
                  ? "text-black font-semibold border-gradient"
                  : ""
              }`}
              onClick={() => handleTabClick("Stake")}
            >
              Stake
            </span>
            <span
              className={`p-2 cursor-pointer ${
                activeTab === "Polygon NFT"
                  ? "text-black font-semibold border-gradient"
                  : ""
              }`}
              onClick={() => handleTabClick("Polygon NFT")}
            >
              Polygon NFT
            </span>
            <span
              className={`p-2 cursor-pointer ${
                activeTab === "Art"
                  ? "text-black font-semibold border-gradient"
                  : ""
              }`}
              onClick={() => handleTabClick("Art")}
            >
              Art
            </span>
            <span
              className={`p-2 cursor-pointer ${
                activeTab === "Collectibles"
                  ? "text-black font-semibold border-gradient"
                  : ""
              }`}
              onClick={() => handleTabClick("Collectibles")}
            >
              Collectibles
            </span>
          </div>

          {/* Sub Navigation */}
          {activeTab === "Stake" && (
            <div className="flex gap-6 my-4 text-gray-500 border-b border-gray-200">
              <span
                className={`p-2 cursor-pointer ${
                  activeSubTab === "Stake"
                    ? "text-black font-semibold border-b-2 border-gradient2"
                    : ""
                }`}
                onClick={() => handleSubTabClick("Stake")}
              >
                Stake
              </span>
              <span
                className={`p-2 cursor-pointer ${
                  activeSubTab === "Collection"
                    ? "text-black font-semibold border-b-2 border-gradient2"
                    : ""
                }`}
                onClick={() => handleSubTabClick("Collection")}
              >
                Collection
              </span>
              <span
                className={`p-2 cursor-pointer ${
                  activeSubTab === "My Stake"
                    ? "text-black font-semibold border-b-2 border-gradient2"
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
            <div className="flex gap-6 mb-4 p-3">
              <span
                className={`font-semibold pb-2 cursor-pointer ${
                  activeZone === "Exclusive" ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setActiveZone("Exclusive")}
              >
                Exclusive Zone
              </span>
              <span
                className={`cursor-pointer ${
                  activeZone === "Free" ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setActiveZone("Free")}
              >
                Free Zone
              </span>
            </div>
          )}

          {/* Cards */}
          {activeTab === "Stake" && activeSubTab === "Stake" && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
              {(activeZone === "Exclusive" ? stakingData : freeZoneData).map(
                (stake) => (
                  <StakeCard key={stake.id} data={stake} />
                )
              )}
            </div>
          )}

          {/* Placeholder for Other Tabs */}
          {activeTab === "Polygon NFT" && (
            <div className="my-8 flex md:flex-row flex-col gap-4 text-center text-gray-500">
              {polygonNFTData.map((nft) => (
                <PolygonNftCard key={nft.id} data={nft} />
              ))}
            </div>
          )}

          {activeTab === "Art" && (
            <div className="my-8 flex md:flex-row flex-col gap-4 text-center text-gray-500">
              {polygonNFTData.map((nft) => (
                <PolygonNftCard key={nft.id} data={nft} />
              ))}
            </div>
          )}

          {activeTab === "Collectibles" && (
            <div className="my-8 flex md:flex-row flex-col gap-4 text-center text-gray-500">
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
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
