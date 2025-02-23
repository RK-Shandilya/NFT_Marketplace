import React from 'react';

const Footer = () => {
  return (
    <footer className={`mx-auto`}>
      <div className="max-w-6xl mx-auto px-6 p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-400 to-green-300 rounded-lg" />
              <span className="text-xl font-semibold">
                Treasure <span className="text-gray-500">NFT</span>
              </span>
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              TreasureNFT is a Web3 revenue platform based on NFT collections
            </p>
          </div>

          {/* Resources Section */}
          <div className="md:col-span-2">
            <h3 className="text-black font-medium mb-6">Resources</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>Docs</li>
              <li>Invite friends</li>
              <li>How to buy</li>
              <li>Tutorials</li>
              <li>Artist Application Form</li>
            </ul>
          </div>

          {/* News Section */}
          <div className="md:col-span-2">
            <h3 className="text-black font-medium mb-6">News</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>Blog</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="md:col-span-4">
            <h3 className="text-black font-medium mb-6">Company</h3>
            <p className="text-gray-600 text-sm mb-6">
              Join our mailing list to stay in the loop with our newest feature releases, NFT listing, tips and tricks for navigating Treasure webpage.
            </p>
            
            {/* Email Input */}
            <div className="relative mb-12">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none text-sm"
              />
              <button className="absolute right-1.5 top-1.5 px-8 py-2 bg-gradient-to-r from-blue-400 to-green-300 text-white rounded-full text-sm">
                Submit
              </button>
            </div>

            {/* Download Section */}
            <h3 className="text-black font-medium mb-6">Download</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-blue-400 rounded-2xl p-4 flex items-center justify-center">
                <img src="/api/placeholder/120/120" alt="App Store QR" className="w-full" />
              </div>
              <div className="bg-green-300 rounded-2xl p-4 flex items-center justify-center">
                <img src="/api/placeholder/120/120" alt="Google Play QR" className="w-full" />
              </div>
              <div className="bg-red-200 rounded-2xl p-4 flex items-center justify-center">
                <img src="/api/placeholder/120/120" alt="APK QR" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400 text-xs font-semibold">
          <p>© 2023 - TreasureMeta Technology, Inc</p>
          <div className="mt-1">
            <span className="mx-3">Privacy Policy</span>
            <span className="mx-3">Terms of service</span>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-400 to-green-300 text-white rounded-full p-4 shadow-lg">
        <span className="flex items-center gap-2">
          <span className="text-xl">💬</span>
          <span>Help</span>
        </span>
      </button>
    </footer>
  );
};

export default Footer;