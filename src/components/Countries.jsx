import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisited = (country) => {
    const newVisited = [...visitedCountry, country];
    setVisitedCountry(newVisited);
  };

  return (
    <div>
      <div>
        <h3 className="font-bold">Visited Country</h3>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>You Visited {country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-12">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleMark={handleVisited}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
