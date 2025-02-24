import { useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";
import NFTCard from "./NFTCard";

const NFTGallery = ({ nft }) => {
  const [visibleNfts, setVisibleNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const loader = useRef(null);
  const itemsPerPage = 4; 

  // Initial load - first batch of NFTs
  useEffect(() => {
    if (nft && nft.length > 0) {
      setVisibleNfts(nft.slice(0, itemsPerPage));
      setCurrentIndex(itemsPerPage);
    }
  }, [nft]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [visibleNfts, loading]); // Add dependencies to avoid stale state

  // Handle intersection
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && !loading && currentIndex < nft.length) {
      loadMoreNFTs();
    }
  };

  // Load more NFTs from the existing array
  const loadMoreNFTs = () => {
    if (currentIndex >= nft.length) return;

    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const nextBatch = nft.slice(currentIndex, currentIndex + itemsPerPage);
      setVisibleNfts((prev) => [...prev, ...nextBatch]);
      setCurrentIndex((prev) => prev + itemsPerPage);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">NFT Collection</h2>

      {/* NFT Grid with Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {visibleNfts.map((nft, index) => (
          <div
            key={nft.id}
            className="transform transition-all duration-500 ease-in-out"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-in-out forwards`,
              animationDelay: `${(index % itemsPerPage) * 0.1}s`,
            }}
          >
            <NFTCard nft={nft} />
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      <div ref={loader} className="flex justify-center items-center py-4 mt-4">
        {loading && <RefreshCw className="animate-spin text-gray-500" size={24} />}
        {currentIndex >= nft.length && !loading && visibleNfts.length > 0 && (
          <p className="text-gray-500">No more items to load</p>
        )}
      </div>

      {/* CSS for fade-in animation */}
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

export default NFTGallery;