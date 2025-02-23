import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner1, banner2, banner3 } from "../../assets/landingPage";
import { TiChevronLeftOutline, TiChevronRightOutline, TiChevronLeft, TiChevronRight } from "react-icons/ti";

const StakingNFTCarousel = () => {
  const sliderRef = React.useRef(null);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      img: banner1,
      alt: "Staking Reward Event 1"
    },
    {
      id: 2,
      img: banner2,
      alt: "Staking Reward Event 2"
    },
    {
      id: 3,
      img: banner3,
      alt: "Staking Reward Event 3"
    }
  ];

  const handleLeftClick = () => {
    setLeftClicked(true);
    sliderRef.current?.slickPrev();
    setTimeout(() => setLeftClicked(false), 200);
  };

  const handleRightClick = () => {
    setRightClicked(true);
    sliderRef.current?.slickNext();
    setTimeout(() => setRightClicked(false), 200);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === images.length - 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`w-6 h-6 border rounded-full transition-colors ${i === currentSlide ? 'bg-blue-400' : 'bg-white'}`}></div>
    ),
  };

  return (
    <div className="mt-14 md:block hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="h-[78vh]">
            {images.map((src) => (
              <div key={src.id} className="outline-none">
                <div className="rounded-3xl overflow-hidden p-8">
                  <div className="max-w-5xl mx-auto">
                    <img 
                      src={src.img} 
                      alt={src.alt}
                      className="w-full h-[84vh] rounded-4xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
            className={`absolute left-3 border border-gray-300 top-1/2 -translate-y-1/2 w-18 h-18 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isLastSlide 
                ? "bg-gray-200" 
                : leftClicked 
                  ? "bg-gray-200" 
                  : "bg-white"
            }`}
            onClick={handleLeftClick}
          >
            {
                isFirstSlide 
                  ? <TiChevronLeftOutline className="text-gray-300" size={40} />
                  : <TiChevronLeft className="text-black" size={40} /> 
            }
          </button>

          <button
            className={`absolute right-2 top-1/2 border border-gray-300 -translate-y-1/2 w-18 h-18 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isFirstSlide 
                ? "bg-gray-200" 
                : rightClicked 
                  ? "bg-gray-200" 
                  : "bg-white"
            }`}
            onClick={handleRightClick}
          >
            {
              isLastSlide 
                ? <TiChevronRightOutline className="text-gray-300" size={40} />
                : <TiChevronRight className="text-black" size={40} /> 
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default StakingNFTCarousel;