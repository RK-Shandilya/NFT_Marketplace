import React from "react";
import { featured } from "../../assets/landingPage/nft";

const FeaturedNFTs = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="relative flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={featured}
              alt="Tertiary NFT"
              className="w-full h-full object-cover rounded-lg"
            />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0 md:p-20">
          <h3 className="text-xl md:text-2xl font-bold text-black">
            RESERVE AND SELL YOUR NFT EASILY
          </h3>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Earning income in TreasureNFT is simple: just RESERVE and then
            TRADE to EARN
          </p>
          <button className="mt-4 px-6 py-2 rounded-full bg-linear-90 from-[rgba(153,188,255)] via-[rgba(153,255,250)] to-[rgba(255,214,199)] text-sm md:text-base font-semibold text-white">
            SIGN UP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNFTs;
