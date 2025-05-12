import React from "react";
import Button from './button';

interface PetKnowledgeProps {
   
  }
  
  const PetKnowledge = ({  }: PetKnowledgeProps) => {
    return (
        <div className="flex justify-center my-20">
            <div className="max-w-[1200px] w-full">
        <div className="flex justify-between ">
            <div>
            <p>You already know ?</p>
            <p className="text-extrabold text-primary">Useful pet knowledge</p>
            </div>
            <Button text="View all our sellers" variant="outline" icon={<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333' stroke='#003459' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>} />
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white grid-rows grid gap-4 shadow-xl rounded-md w-full h-[98] px-2 py-4">
            <img src="/images/aboutpomerian.png"/>
            <div>
            <Button text="Pet knowledge" variant="ticket"/>
            </div>
            <p>What is a Pomeranian? How to Identify Pomeranian Dogs</p>
            <p>The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
            </div>

          

            <div className="bg-white grid-rows grid gap-4 shadow-xl rounded-md w-full h-[98] px-2 py-4">
                <img src="/images/aboutdiet.png"/>
                <div>
                  <Button text="Pet knowledge" variant="ticket"/>
                </div>
                <p>Dog Diet You Need To Know</p>
                <p>Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.</p>
            </div>

              <div className="bg-white grid-rows grid gap-4 shadow-xl rounded-md w-full h-[98] px-2 py-4">
            <img src="/images/aboutbites.png"/>
            <div>
            <Button text="Pet knowledge" variant="ticket"/>
            </div>
            <p>Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</p>
            <p>Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</p>
            </div>
        </div>
        </div>
        </div>
    );
  };
  
  export default PetKnowledge;
  