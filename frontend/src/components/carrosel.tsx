'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import React from 'react';

const customers = [
  '/images/costumer1.png',
  
  '/images/costumer2.png',
  
  '/images/costumer3.png',
  
  '/images/costumer4.png',
  
  
];

export default function Carrosel() {
  return (

    <section className="flex justify-center">
        <div className='w-full max-w-[1200px] py-8'>
      <h2 className="text-xl font-semibold text-left px-6 mb-4">Our lovely customer</h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
        }}
        className="w-full px-6"
      >
        {customers.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Customer ${index}`}
              className="rounded-xl w-full h-72 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
