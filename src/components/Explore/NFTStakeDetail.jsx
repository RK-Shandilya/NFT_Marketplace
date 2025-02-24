import React, { useState, useEffect } from "react";
import { ChevronLeft, RefreshCw, Filter } from "lucide-react";
import NFTCard from "../NFTDetail/NFTCard";

const NFTStakeDetail = ({ stakeData, onBack }) => {
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("ascending");
  
  // Simulate fetching NFTs for this stake
  useEffect(() => {
    const fetchNFTs = async () => {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock NFT data based on the price range
      const priceRange = stakeData.priceRange.split("~");
      const minPrice = parseInt(priceRange[0]);
      const maxPrice = parseInt(priceRange[1]);
      
      const mockNfts = Array.from({ length: 12 }, (_, i) => {
        const price = minPrice + Math.floor(Math.random() * (maxPrice - minPrice));
        return {
          id: `${stakeData.id}-nft-${i}`,
          name: `${stakeData.title} NFT #${i+1}`,
          image: stakeData.image, // Reusing stake image for simplicity
          price: price,
          tokenId: Math.floor(100000 + Math.random() * 900000),
          level: stakeData.level,
          income: stakeData.income
        };
      });
      
      setNfts(mockNfts);
      setFilteredNfts(mockNfts);
      setLoading(false);
    };
    
    fetchNFTs();
  }, [stakeData]);
  
  // Sort NFTs by price
  const sortNFTs = () => {
    const newOrder = sortOrder === "ascending" ? "descending" : "ascending";
    setSortOrder(newOrder);
    
    const sorted = [...filteredNfts].sort((a, b) => {
      return newOrder === "ascending" ? a.price - b.price : b.price - a.price;
    });
    
    setFilteredNfts(sorted);
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Return</span>
        </button>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <RefreshCw className="animate-spin text-gray-500" size={32} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredNfts.map((nft, index) => (
              <div
                key={nft.id}
                className="transform transition-all duration-500 ease-in-out"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-in-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <NFTCard nft={nft} />
                <button className="rounded-xl w-full mt-2 text-sm bg-gradient-to-r from-[rgba(153,188,237)] via-[rgba(153,248,207)] to-[rgba(255,214,199)] text-gray-500 hover:text-gray-900 p-3">Buy Now</button>
              </div>
            ))}
          </div>
          
          {filteredNfts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No NFTs available for this stake option
            </div>
          )}
        </>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NFTStakeDetail;