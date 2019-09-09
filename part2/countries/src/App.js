import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter)
  );

  const renderFilteredCountries = () => {
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return filteredCountries.map(country => (
        <p key={country.alpha2Code}>{country.name}</p>
      ));
    } else if (filteredCountries.length <= 1) {
      return filteredCountries.map(country => (
        <div key={country.callingCodes}>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h4>languages</h4>
          <ul>
            {country.languages.map(language => (
              <li key={language.iso639_1}>{language.name}</li>
            ))}
          </ul>
          <p>
            <img src={country.flag} alt={country.name} />
          </p>
        </div>
      ));
    }
  };

  return (
    <div>
      <p>
        find countries <input onChange={handleFilter} />
      </p>
      <div>{renderFilteredCountries()}</div>
    </div>
  );
}

export default App;
