import React, { useState } from "react";

interface FilterState {
  gender: string[];
  color: string[];
  priceMin: string;
  priceMax: string;
  breed: string[];
}

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    gender: [],
    color: [],
    priceMin: "",
    priceMax: "",
    breed: [],
  });

  const handleCheckboxChange = (
    type: keyof FilterState,
    value: string
  ) => {
    setFilters((prev) => {
      const current = prev[type] as string[];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      const newFilters = { ...prev, [type]: updated };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg w-full">
      <h2 className="text-xl font-semibold text-primary mb-4">Filter</h2>

      <div className="mb-6">
        <p className="font-medium text-primary mb-2">Gender</p>
        
        {["Male", "Female"].map((gender) => (
          <div className="grid grid-cols-3">
          <label key={gender}>
            <input
              type="checkbox"
              className="mr-2"
              checked={filters.gender.includes(gender)}
              onChange={() => handleCheckboxChange("gender", gender)}
            />
            {gender}
          </label>
          
      </div>
        ))}
      </div>
      <hr className="my-4" />

      <div className="mb-6">
        <p className="font-medium text-primary mb-2">Color</p>
        {[
          { label: "White", color: "bg-white" },
          { label: "Apricot", color: "bg-orange-300" },
          { label: "Black", color: "bg-black" },
          { label: "Black & White", color: "bg-gradient-to-r from-black to-white" },
          { label: "Silver", color: "bg-gray-300" },
          { label: "Tan", color: "bg-yellow-100" },
        ].map(({ label, color }) => (
          <label className="flex items-center gap-2" key={label}>
            <input
              type="checkbox"
              checked={filters.color.includes(label)}
              onChange={() => handleCheckboxChange("color", label)}
            />
            <span className={`w-4 h-4 rounded-full border ${color}`} />
            {label}
          </label>
        ))}
      </div>
      <hr className="my-4" />

      <div className="mb-6">
        <p className="font-medium text-primary mb-2">Price</p>
        <div className="flex gap-4">
          <input
            type="number"
            name="priceMin"
            placeholder="Min"
            className="border px-3 py-1 rounded-md w-full"
            value={filters.priceMin}
            onChange={handlePriceChange}
          />
          <input
            type="number"
            name="priceMax"
            placeholder="Max"
            className="border px-3 py-1 rounded-md w-full"
            value={filters.priceMax}
            onChange={handlePriceChange}
          />
        </div>
      </div>
      <hr className="my-4" />

      <div className="mb-2">
        <p className="font-medium text-primary mb-2">Breed</p>
        {["Small", "Medium", "Large"].map((breed) => (
          <div className="grid grid-cols-3">
            <label key={breed}>
              <input
                type="checkbox"
                className="mr-1"
                checked={filters.breed.includes(breed)}
                onChange={() => handleCheckboxChange("breed", breed)}
              />
              {breed}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
