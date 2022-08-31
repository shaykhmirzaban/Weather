import React, { useState } from "react";
import "../style/weather.css";

const Weather = () => {
  let [data123, updateData] = useState();

  const dataSearch = () => {
    let searchVal = document.querySelector("input");
    let val = searchVal.value;

    const apiSearch = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=83d8cbbb34d1b3f49775cc10180daf43&units=metric`;

      let response = await fetch(url);
      let resJson = await response.json();

      if (resJson.cod == "404") {
        alert(`${searchVal.value} city is not match. Please try another city`);
      } else {
        updateData(resJson);
      }
    };

    apiSearch();
    searchVal.value = "";
  };
  return (
    <React.StrictMode>
      <section className="main">
        <div className="col1">
          <h4>The Weather</h4>
          {data123 == undefined ? null : (
            <h1>{Math.round(data123.main.temp)}°C</h1>
          )}
        </div>
        <div className="col2">
          <div className="search">
            <input type="search" placeholder="enter city name" />
            <button onClick={dataSearch}>Check</button>
          </div>
          <div className="location">
            <h3>Location</h3>
            <div className="country">
              <p>country</p>
              {data123 == undefined ? null : <p>{data123.sys.country}</p>}
            </div>
            <div className="city">
              <p>city</p>
              {data123 == undefined ? null : <p>{data123.name}</p>}
            </div>
          </div>
          <div className="weatherDetail">
            <h3>Weather Detail</h3>
            <div className="cloudy">
              <p>Cloudy</p>
              {data123 == undefined ? null : <p>{data123.clouds.all}%</p>}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data123 == undefined ? null : <p>{data123.main.humidity}%</p>}
            </div>
            <div className="wind">
              <p>Wind</p>
              {data123 == undefined ? null : <p>{data123.wind.speed}km/h</p>}
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Weather;
