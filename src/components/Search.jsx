import React, { useState } from "react";

const Search = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-country"
        type="text"
        placeholder="Search for a Country..."
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default Search;
