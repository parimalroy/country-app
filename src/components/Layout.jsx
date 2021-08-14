import React, { useEffect, useState } from "react";
import ".././Layout.css";
import Card from "./Card";

const Layout = (props) => {
  const [query, setQuery] = useState("");
  const [allCountry, setAllCountry] = useState([]);
  const getCountryData = async () => {
    try {
      if (query) {
        const response = await fetch(
          `${process.env.REACT_APP_country}/${query}`
        );
        const result = await response.json();
        result.map((item, index) => {
          if (query.toLowerCase() == item.name.toLowerCase()) {
            setAllCountry(result);
          }
        });
        setAllCountry(result);
      } else {
        const responseWell = await fetch(`${process.env.REACT_APP_all}`);
        const resultWell = await responseWell.json();
        setAllCountry(resultWell);
      }
    } catch (err) {
      console.log(err);
    }
    //console.log(result)

    // console.log(result.name)
  };
  useEffect(() => {
    getCountryData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
    getCountryData();
  };

  //console.log(allCountry)
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <h2>
            <i class="fas fa-globe"></i> Country Information
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              className=" mr-sm-2 form-control search-box"
              type="search"
              placeholder="Search Country"
              value={query}
              onChange={handleChange}
            />
            {/* <button className="btn btn-primary my-sm-0" type="submit">Search</button> */}
          </form>
        </nav>
        <div className="row mt-5 justify-content-center">
          {allCountry.map((item, index) => {
            //console.log(allCountry)
            return (
              <Card
                Name={item.name}
                Alpha2Code={item.alpha2Code}
                Image={item.flag}
                Capital={item.capital}
                Region={item.region}
                Subregion={item.subregion}
                Population={item.population}
                CallingCodes={item.callingCodes}
                TopLevelDomain={item.topLevelDomain}
                Timezones={item.timezones}
                Currencies={`Code: ${item.currencies[0].code}, Name: ${item.currencies[0].name}, Symbol: ${item.currencies[0].symbol}`}
                Languages={`Language :${item.languages[0].name}, Native Language: ${item.languages[0].nativeName}`}
                Borders={item.borders}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Layout;
