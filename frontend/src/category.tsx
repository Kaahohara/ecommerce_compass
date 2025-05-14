import React, { useState } from 'react';
import './App.css';
import Products from './components/products';
import Banner from './components/banner';
import Filter from './components/filter';
import Menu from './components/menu';
import Footer from './components/footer';

interface FilterState {
  gender: string[];
  color: string[];
  priceMin: string;
  priceMax: string;
  breed: string[];
}

function Category() {
  const [filters, setFilters] = useState<FilterState>({
    gender: [],
    color: [],
    priceMin: "",
    priceMax: "",
    breed: [],
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Menu />
      <Banner
        title="One more friend"
        subtitle="Thousands more fun!"
        description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
        image="/images/petsbanner.png"
        variant="right"
      />
      <div className="grid lg:grid-cols-12 gap-6 max-w-[1200px] mx-auto my-10">
        <div className="col-span-3 lg:block hidden">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="col-span-9">
          <Products
            category="Pet"
            subtitle="What's new?"
            title="Take a look at some of our pets"
            variant="category"
            filters={filters}   
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
