import React, { useState } from 'react';

const images = [
  '/images/shiba1.png',
  '/images/shiba2.png',
  '/images/shiba3.png',
  '/images/shiba4.png',
  '/images/shiba5.png',
];

const CarroselPrincipal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => setCurrentIndex(index);

  return (
    <div className="w-full max-w-xl mx-auto">

      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`${currentIndex}`}
          className="rounded-lg w-full h-auto object-cover"
        />
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 justify-center flex bg-white/60 p-2 w-[35px] h-[35px] rounded-full shadow"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8.16675 14.5L1.66675 8L8.16675 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform  w-[35px] h-[35px] justify-center flex -translate-y-1/2 bg-white/60 p-2 rounded-full shadow"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
        <path d="M1.8335 14.5L8.3335 8L1.8335 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => goToImage(index)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border-4 ${
              index === currentIndex ? 'border-secondary' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarroselPrincipal;
