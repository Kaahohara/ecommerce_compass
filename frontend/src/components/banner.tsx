import React from 'react';
import Button from './button';
import Menu from './menu'
import {cva} from 'class-variance-authority'

interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href?: string;
  variant?: 'left' | 'right' | 'principal';
  button?: 'reverse' | 'default';

}

const Banner: React.FC<BannerProps> = ({ title, subtitle, description, button, image, variant, href }) => {
   const bannerVariants = cva('', {
    variants: {
      direction: {
        left: 'flex-row text-center lg:text-left',
        right: 'flex-row-reverse text-center lg:text-right',
        principal: 'text-left', 
      },
      size: {
        principal: 'h-[690px] w-full',
        default: 'max-h-[500px] h-full lg:w-[1200px] mx-10 rounded-xl',
      },
      align: {
        principal: 'justify-start',
        right: 'justify-end',
        left:'justify-start'
      },
      buttondirection:{
         reverse: 'flex-row-reverse text-center lg:text-left items-center justify-center lg:justify-end lg:items-left',
         default: 'flex-row',
      }
    },
   
  });
  return (
<div className='flex justify-center items-center'>
<div 
  className={`${bannerVariants({size: variant === 'principal' ? 'principal' : 'default' })} bg-cover bg-center `} 
  style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
>
   {variant === 'principal' && <Menu />}

  <div  className={`${bannerVariants({ direction: variant })} flex md:flex-col w-full items-center justify-center lg:p-20`}>
      <div className='lg:w-1/2 w-full lg:max-w-[600px]'>
        <div className={`flex flex-col justify-center`}>
          <p className="text-primary text-5xl font-extrabold lg:text-[60px]">{title}</p>
          <p className="text-primary text-2xl  font-bold lg:text-[46px]">{subtitle}</p>
          <p className="text-black text-xl">{description}</p>
          <div className={`${bannerVariants({ align: variant, buttondirection: button === 'reverse' ? 'reverse' : 'default' })} flex gap-4 my-4 items-center`}>

            <Button
              text="View More"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M8 7V13L13 10L8 7Z"
                    fill="#003459"
                    stroke="#003459"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              href="/category"
              variant="outline"
            />
            <Button text="Explore now" variant="solid" href="/category"/>
          </div>
        </div>
         </div>
        <div className="w-1/2"></div>
      </div>
     </div>
    </div>
  );
};

export default Banner;