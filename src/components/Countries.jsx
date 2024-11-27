import { useEffect, useState } from "react";
import Country from "./Country";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v3.1/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCountriesData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Something went wrong!");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  function removeCountry(cca2) {
    const newCountry = countries.filter((country) => country.cca2 !== cca2);
    setCountries(newCountry);
  }
  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${regionName}`
      );
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  return (
    <>
      <Filter  onSelect={getCountryByRegion} onSearch={getCountryByName} />
      <section className="flex">
        {isLoading && !error && <h4>Loading.............</h4>}
        {error && !isLoading && <h4>{error}</h4>}
        {countries.map((country) => {
          const { name, population, flag, region, capital, numericCode, cca2 } =
            country;
          return (
            <article key={cca2}>
              <div>
                <img src={flag} alt={name.common} />
                <div className="details">
                  <h3>{name.common}</h3>
                  <h4>
                    population: <span>{population}</span>
                  </h4>
                  <h4>
                    region: <span>{region}</span>
                  </h4>
                  <h4>
                    capital: <span>{capital}</span>
                  </h4>
                  <div className="buttons">
                    <Link className="btn" to={`/countries/${name.common}`}>
                      Learn More
                    </Link>
                    <button className="btn" onClick={() => removeCountry(cca2)}>
                      Remove Country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
