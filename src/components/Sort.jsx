import React from "react";

const Sort = ({ setSort }) => {
  return (
    <select
      className="sort"
      onChange={(e) => {
        setSort(e.target.value);
      }}
    >
      <option>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Sort;
