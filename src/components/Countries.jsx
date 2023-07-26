import { React, useEffect, useState } from "react";
import Country from "./Country";
import axios from "axios";

function Countries({ search, sort }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(sort);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/${
            !search && !sort
              ? "all"
              : search
              ? "name/" + search
              : "region/" + sort
          }`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    getCountries();
  }, [search, sort]);

  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="countries">
      {data.map((country, i) => (
        <Country key={i} country={country} />
      ))}
    </div>
  );
}

export default Countries;
