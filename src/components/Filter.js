import React from "react";

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    if (onCategoryChange) {
      onCategoryChange(event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;
