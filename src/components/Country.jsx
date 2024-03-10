import { useState } from "react";
const Country = ({ country, handleMark }) => {
  const { name, capital, flags, population, cca3, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };
  function handleBothClicks() {
    handleVisit();
    handleMark(country);
  }
  return (
    <div>
      <div
        className={`card w-96 bg-base-100 shadow-xl ${
          visited ? "bg-green-500" : "bg-white"
        }`}
      >
        <figure>
          <img className="w-full h-[220px]" src={flags.png} alt="Flag" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name.common}</h2>
          <h3 className="text-xl">Capital: {capital}</h3>
          <p>Population: {population} People</p>
          <p>Area: {area} SQUARE(KM)</p>
          <p>Code: {cca3}</p>
          <div className="card-actions justify-start items-center gap-5 mt-2">
            <button
              onClick={handleBothClicks}
              className="btn btn-accent px-6 py-[5px]"
            >
              Visit
            </button>
            <p className="font-bold text-base">
              {visited ? "I have Visited" : "Never Visited"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
