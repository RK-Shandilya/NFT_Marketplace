import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { nav } from 'framer-motion/client';

const NFTCard = ({ nft }) => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-fit rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer"
    onClick={() => navigate(`/detail/${nft.id}`)}
    >
      <div className="relative w-fit aspect-square overflow-hidden">
        <img
          src={nft.image || "/api/placeholder/400/400"} 
          alt={nft.title}
          className={`w-50 rounded-2xl h-50 object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <RefreshCw className="animate-spin text-gray-400" size={24} />
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium truncate">{nft.title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-emerald-500 rounded-full text-white flex items-center justify-center text-xs">T</div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{nft.price}</span>
          </div>
          <div className="ml-auto text-gray-500 dark:text-gray-400 flex items-center">
            <span>{nft.change || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NFTCard);