import React from "react";

function Filter({ onFormChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onFormChange} />
      <select name="filter" onChange={onFormChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
