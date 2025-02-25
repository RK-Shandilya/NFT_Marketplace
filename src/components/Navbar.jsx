import React, { useState, useEffect } from 'react';
import logo from '/NFT_logo.png';
import { AlignJustify, Bell, FileKey, Headset, Mail, Wallet, Search } from 'lucide-react';
import { earn, tg, lang, account } from '../assets/landingPage/navbar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 1;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-transparent"
      }`}>
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        <div>
          <img src={logo} alt="Logo" className="w-24 bg-gray-950 rounded-2xl" />
        </div>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AlignJustify className="w-8 h-8" />
        </button>

        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
          <div className="font-semibold cursor-pointer hover:opacity-80 mb-4 md:mb-0" onClick={()=> navigate('/explore')}>Explore</div>
          <div className="font-semibold cursor-pointer hover:opacity-80 mb-4 md:mb-0"
          onClick={()=> navigate('/collection')}
          >Earn</div>
          <div className="font-semibold cursor-pointer hover:opacity-80 mb-4 md:mb-0"
          onClick={()=> navigate('/store/defi')}
          >Reserve</div>
          <div className="relative w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Select"
                className="border border-gray-500 rounded-full w-full md:w-72 p-2 px-5 placeholder:text-gray-400 focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Right Section - Icons & Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative cursor-pointer"
          onClick={() => navigate('/announcements')}
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>
          <div className="text-lg font-semibold cursor-pointer hover:opacity-80"
          onClick={() => navigate('/rewards')}
          >Airdrop</div>
          <button><img src={earn} alt="Earn" className="w-7" /></button>
          <button><img src={tg} alt="Telegram" className="w-7" /></button>
          <button><img src={lang} alt="Language" className="w-7" /></button>

          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <AlignJustify className="w-8 h-8" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <div className="p-2 space-y-2">
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full">
                    <Headset className="w-6" />
                    Service
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full cursor-pointer"
                  onClick={() => navigate('/user')}
                  >
                    <img src={account} alt="Account" className="w-6" />
                    Account
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full cursor-pointer"
                  onClick={()=> navigate('/wallet')}
                  >
                    <Wallet className="w-6" />
                    Wallet
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full cursor-pointer"
                  onClick={()=> navigate('/message')}
                  >
                    <Mail className="w-6" />
                    Message
                  </button>
                  <button className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full">
                    <FileKey className="w-6" />
                    Security TAP
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>
          <button><img src={earn} alt="Earn" className="w-7" /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;