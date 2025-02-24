import React from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Layout from "../Layout";
import { bg } from "../assets/Explore";
import { nft1 } from "../assets/landingPage/nft";

const nftData = {
  name: "Stake_276256",
  contractAddress: "0xd7b...2abf5",
  owner: "SarahBrown",
  price: 214,
  resaleProfit: 0,
  chain: "Polygon",
  tokenId: "",
  timeZone: "",
  historicalPrices: [
    { date: "2/20", price: 214 },
    { date: "2/21", price: 214 },
    { date: "2/22", price: 215 },
    { date: "2/23", price: 214 },
  ],
  imageUrl: nft1,
};

const CardDetails = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  return (
    <Layout style={{ backgroundImage: `url(${bg})` }}>
      <div className="mt-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl p-6 rounded-lg shadow-lg mx-auto">
          {/* NFT Details Section */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            <h2 className="text-xl lg:text-2xl font-bold">{nftData.name}</h2>
            <p className="text-gray-600 text-sm lg:text-base">
              <strong>Contract Address:</strong>{" "}
              <a
                href={`https://polygonscan.com/address/${nftData.contractAddress}`}
                className="text-blue-500"
              >
                {nftData.contractAddress}
              </a>
            </p>
            <p className="text-gray-600 text-sm lg:text-base">
              <strong>Owner:</strong> {nftData.owner}
            </p>
            <p className="text-gray-600 text-sm lg:text-base">
              <strong>Price:</strong> 🪙 {nftData.price}
            </p>
            <p className="text-gray-600 text-sm lg:text-base">
              <strong>Resale Profit:</strong> 🪙 {nftData.resaleProfit}
            </p>
            <p className="text-gray-600 text-sm lg:text-base">
              <strong>Chain:</strong> {nftData.chain}
            </p>

            {/* Historical Value Chart */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Historical Value</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={nftData.historicalPrices}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#4CAF50" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* NFT Image */}
          <div className="flex flex-col gap-3 justify-center w-full lg:w-2/3">
            <img
              src={nftData.imageUrl}
              alt="NFT"
              className="rounded-lg shadow-lg w-full"
            />
            <button className="rounded-xl mx-auto w-fit mt-2 text-sm bg-gradient-to-r from-[rgba(153,188,237)] via-[rgba(153,248,207)] to-[rgba(255,214,199)] text-gray-500 hover:text-gray-900 p-3 px-9 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardDetails;