import React from "react";
import Carousel from "../components/LandingPage/Carousel";
import { LuCalendarCheck2 } from "react-icons/lu";
import { TiChartBarOutline } from "react-icons/ti";
import NFTMarketplace from "../components/LandingPage/NFTCollection";
import Layout from "../Layout";
import NFTCollectibles from "../components/LandingPage/NFTCollectibles";
import DiscoverNFTs from "../components/LandingPage/DiscoverNFT";
import VideoSection from "../components/LandingPage/VideoSection";
import FeaturedNFT from "../components/LandingPage/FeaturedNFT";

const LandingPage = () => {
  return (
    <Layout style={{ background: "white" }}>
      <div className="mx-auto">
        <Carousel />
        <div className="flex flex-col md:flex-row justify-between gap-8 p-8 md:p-18 bg-gradient-to-r from-[rgba(153,188,237,.2)] via-[rgba(153,248,207,.5)] to-[rgba(255,214,199,.5)] mt-24 text-center">
          {/* Main Heading */}
          <div className="text-xl md:text-2xl font-bold uppercase mb-8 md:mb-0">
            Explore, Discover and Earn Big with one of the top Web3 NFT
            Marketplaces in the world.
          </div>

          {/* Multi-Reward Section */}
          <div className="flex gap-4 text-start">
            <div>
              <LuCalendarCheck2 size={30} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold">Multi-Reward</div>
              <div className="text-sm">
                JEONFT leverages a proprietary AI-powered algorithmic
                trading model, and provides a dual earnings mechanism with
                trading rewards as well as referral rewards.
              </div>
            </div>
          </div>

          {/* Earn Future Value Section */}
          <div className="flex gap-4 text-start">
            <div>
              <TiChartBarOutline size={30} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold">Earn Future Value</div>
              <div className="text-sm">
                JEONFT reduces the entry hurdles of the NFT market and
                expands the boundaries of the NFT collection & trading through
                its innovative AI algorithmic trading process and rewarding
                financial model.
              </div>
            </div>
          </div>
        </div>
        <NFTMarketplace />
        <FeaturedNFT />
        <NFTCollectibles />
        <div className="bg-linear-90 from-[rgba(153,188,237,.2)] via-[rgba(153,248,207,.5)] to-[rgba(255,214,199,.5)]">
          <DiscoverNFTs />
        </div>
        <VideoSection />
      </div>
    </Layout>
  );
};

export default LandingPage;
