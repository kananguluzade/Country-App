import React from "react";

const Country = (country) => {
  return (
    <div className="country-card">
      <img className="flag-img" src={country.country?.flags.png} />
      <div className="content-box">
        <h4>name: {country.country?.name?.common}</h4>
        <p>region: {country.country?.region}</p>
        <p>capital: {country.country?.capital}</p>
      </div>
    </div>
  );
};

export default Country;
