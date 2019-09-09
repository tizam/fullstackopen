import React from "react";

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <input onChange={handleFilter} />
    </div>
  );
};

export default Filter;
