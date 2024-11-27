import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  const fetchCountryDate = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const country = await res.json();
    setCountry(country);
    console.log(country);
  };

  useEffect(() => {
    fetchCountryDate();
  }, []);

  return (
    <>
      <section className="country">
        <Link className="btn btn-light" to="/">
          <i className="fas fa-arrow-left"></i>Back Home
        </Link>
        {country.map((c) => {
          const {
            cca2,
            flag,
            name,
            population,
            region,
            subregion,
            capital,
            topLevelDomail,
            currencies,
            languages,
            borders,
          } = c;
          return (
            <article className="article" key={cca2}>
              <div className="flag">
                <img src={flag} alt={name.common} />
         
              </div>
              <div>
                <div className="country-details">
                  <div>
                    <h2>{name.common}</h2>
                    <h5>
                      Native Name: <span>{name.official}</span>
                    </h5>
                    <h5>
                      Population: <span>{population}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Subregion: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>
                    </h5>
                  </div>
                  <div>
                    <h5>
                      Top Level Doamin: <span>{topLevelDomail}</span>
                    </h5>
                    <h5>
                      Currencies: <span>{currencies.symbol}</span>
                    </h5>
                    <h5>
                      Languages: <span>{languages[0]}</span>
                    </h5>
                  </div>
                </div>
                <div>
                  <h3>Border Countries:</h3>
                  <div className="borders">
                    {/* {borders.map((border,index)=>{
  return(
    <ul key={index}>
      <li>{border}</li>
    </ul>
  )
})} */}
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

export default Country;
