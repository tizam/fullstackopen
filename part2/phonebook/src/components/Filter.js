import React from "react";

const Filter = ({ filter, handleFilter }) => (
  <p>
    filter shown with <input value={filter} onChange={handleFilter} />
  </p>
);

export default Filter;
