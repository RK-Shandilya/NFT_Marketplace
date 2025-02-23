import React from "react";
import Layout from "../Layout";
import StakeCard from "../components/Explore/StakeCard";
import { bg } from "../assets/Explore";
import { offer1, offer2, offer3, offer4, offer5, offer6 } from "../assets/Explore/exclusive_zone";

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
      }
]

const Explore = () => {
  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto mt-14 bg-cover bg-center bg-no-repeat">
        {/* Header */}
        <h1 className="text-3xl font-semibold mb-4 px-14 pt-18">Explore</h1>

        {/* Navigation Tabs */}
        <div className="bg-white w-full p-12">
          <div className="flex gap-6 border-b border-gray-200 text-gray-600">
            <span className="p-2 text-black font-semibold border-gradient cursor-pointer">
              Stake
            </span>
            <span className="p-2 cursor-pointer">Polygon NFT</span>
            <span className="p-2 cursor-pointer">Art</span>
            <span className="p-2 cursor-pointer">Collectibles</span>
          </div>

          {/* Sub Navigation */}
          <div className="flex gap-6 my-4 text-gray-500 border-b border-gray-200">
            <span className="p-2 text-black font-semibold border-b-2 border-gradient2 pb-2 cursor-pointer">
              Stake
            </span>
            <span className="p-2 cursor-pointer">Collection</span>
            <span className="p-2 cursor-pointer">My Stake</span>
          </div>

          {/* Zones */}
          <div className="flex gap-6 mb-4 p-3">
            <span className="font-semibold border-b-2 border-black pb-2 cursor-pointer">
              Exclusive Zone
            </span>
            <span className="cursor-pointer">Free Zone</span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
            {stakingData.map((stake) => (
              <StakeCard key={stake.id} data={stake} />
            ))}
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default Explore;