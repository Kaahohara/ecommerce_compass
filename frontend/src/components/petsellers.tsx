import React from "react";
import Button from './button';

interface PetSellersProps {
   
  }
  
  const PetSellers = ({  }: PetSellersProps) => {
    return (
        <div className="flex justify-center my-20">
            <div className="max-w-[1200px] w-full">
        <div className="flex justify-between ">
            <p>Proud to be part of <span className="text-black font-bold">Pet Sellers</span></p>
            <Button text="View all our sellers" variant="outline" icon={<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333' stroke='#003459' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>} />
        </div>
        <div className="grid grid-cols-7">
            <img src="/images/sheba.png" alt="sheba"/>
            <img src="/images/whiskas.png" alt="whiskas"/>
            <img src="/images/bakers.png" alt="bakers"/>
            <img src="/images/felix.png" alt="felix"/>
            <img src="/images/goodboy.png" alt="goodboy"/>
            <img src="/images/butchers.png" alt="butcher"/>
            <img src="/images/pedigree.png" alt="pedigree"/>
        </div>
        </div>
        </div>
    );
  };
  
  export default PetSellers;
  