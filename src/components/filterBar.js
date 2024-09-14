// src/components/FilterBar.js

import React, { useState } from 'react';

const FilterBar = ({ setFilters }) => {
  const [price, setPrice] = useState(500);
  const [rating, setRating] = useState(3);

  const applyFilters = () => {
    setFilters({ price, rating });
  };

  return (
    <div className="filter-bar" style={{ marginBottom: "20px" }}>
      <div>
        <label>Max Price: ${price}</label>
        <input 
          type="range" 
          min="100" 
          max="1000" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Min Rating: {rating}</label>
        <input 
          type="range" 
          min="1" 
          max="5" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;