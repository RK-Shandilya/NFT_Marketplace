import React from 'react';
import NftCard from './Featured/Nft';
import { nft1, nft2, nft3, nft4, profile } from '../../assets/landingPage/featured_nft/index.js';

const FeaturedNFT = () => {
  const data = [
    [nft1, nft2, nft3, nft4, profile],
    [nft1, nft2, nft3, nft4, profile],
    [nft1, nft2, nft3, nft4, profile],
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-[rgba(153,188,237,.2)] via-[rgba(153,248,207,.5)] to-[rgba(255,214,199,.5)] px-4 sm:px-8 md:px-20 py-10 sm:py-14">
        {/* Heading */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black uppercase mb-6 text-center sm:text-left">
          FEATURED NFT COLLECTIBLES
        </div>

        {/* NFT Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {data.map((nftData, index) => (
            <NftCard key={index} data={nftData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFT;