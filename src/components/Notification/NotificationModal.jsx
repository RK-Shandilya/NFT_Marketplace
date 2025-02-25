import React from "react";
import { X } from "lucide-react";

const NotificationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      {/* Modal Container */}
      <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg w-[90%] max-w-md md:max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">
          Notification
        </h2>

        {/* Content */}
        <div className="bg-white/80 p-4 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            🎁 TreasureNFT 🌍 Community Exclusive Rewards 🎁
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>🎁 1. Recommend 1 valid fan, reach $100 → Get $18 reward</li>
            <li>🎁 2. Recommend 1 valid fan, reach $150 → Get $30 reward</li>
            <li>🎁 3. Recommend 1 valid fan, reach $200 → Get $40 reward</li>
            <li>🎁 4. Recommend 1 valid fan, reach $300 → Get $50 reward</li>
          </ul>

          <p className="text-gray-600 text-sm mt-4">
            📅 <strong>Effective:</strong> February 23, 2025 <br />
            📌 <strong>Deadline:</strong> Subject to official announcement <br />
            💰 <strong>Bonus:</strong> Sent directly to "TreasureNFT" account
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-medium shadow-md transition hover:scale-105"
            onClick={onClose}
          >
            GO →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
