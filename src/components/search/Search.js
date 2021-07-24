import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import Weather from "../weather/Weather";

function Search() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  //   const [climate, setClimate] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }, []);

  const baseURL = "http://api.weatherapi.com/v1";
  const apiKey = "a6d7bfc595f44966b27135652211907"; //from https://www.weatherapi.com/

  // const getWeather = (weatherNow) => {
  //   console.log(weatherNow);
  //   let textToUrl = encodeURIComponent(weatherNow);
  //   let endPoint = `${baseURL}/current.json?key=${apiKey}&q=${textToUrl}`;
  //   console.log(endPoint);
  //   fetch(endPoint)
  //     .then((res) => res.json())
  //     .then((data) => setResult(data));
  // };
  // console.log(result);

  const getWeather = (weatherNow) => {
    let textToUrl = encodeURIComponent(weatherNow);
    console.log(encodeURIComponent(textToUrl));
    let endPoint = `${baseURL}/current.json?key=${apiKey}&q=${textToUrl}`;
    console.log(endPoint);

    axios
      .get(endPoint)
      .then((data) => setResult(data.data))
      .catch((err) =>
        console.log(`Oh no! You have an error. This is your problem: ${err}`)
      );
  };
  // const location = result.location;
  // const current = result.current;
  // const condition = current.condition;
  console.log([result]);
  // console.log(location);
  // console.log(current);
  // console.log(condition);
  // console.log(Object.values(current));

  //   const arrLoc = [];
  //   Object.keys(result.location).forEach((key) =>
  //     arrLoc.push(result.location[key])
  //   );
  //   console.log(arrLoc[2]);

  // setClimate(result);
  // console.log(climate);
  // const currentLocation = Object.entries(result.location).map((obj) => {
  //   console.log(obj);
  //   const { name, country } = obj;
  //   return <div>{obj}</div>;
  // });
  // console.log(currentLocation);

  // const mapLocation = new Map(Object.entries(location));
  // console.log(mapLocation);

  // const locationArray = Object.values(result.location);y
  // Object.entries(result.location).forEach(([key, value]) =>
  //   console.log(`${key}: ${value}`)
  // );

  // const currentWeather = Object.entries(result).map((obj) => {
  //   console.log(obj);
  //   const { temp_c, wind_dir } = obj;
  //   return <div>{obj}</div>;
  // });
  // console.log(currentWeather);

  // useEffect(() => {
  //   fetch(getWeather)
  //     .then((res) => res.json())
  //     .then((data) => setResults(data.hits));
  //   // .then((data) => console.log(data.hits));
  // }, []);

  function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);
    let endPoint = `${baseURL}/current.json?key=${apiKey}&q=${textToUrl}`;
    setUserInput("");
    console.log(endPoint);
    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch(console.error(`Nope – you took a wrong turn somewhere`));
  }
  const arrLoc = [];
  const wetter = (result) => {
    if (result !== undefined || null) {
      Object.keys(result.location).forEach((key) =>
        arrLoc.push(result.location[key])
      );
    } else {
      return console.log("is empty");
    }
  };
  console.log(wetter);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   let textToUrl = encodeURIComponent(userInput);
  //   let endPoint = `${baseURL}/current.json?key=${apiKey}&q=${textToUrl}`;
  //   setUserInput("");
  //   axios(endPoint)
  //     .then(({ data }) => setResult(data))
  //     .catch(console.error(`Nope – you took a wrong turn somewhere`));
  // }
  // console.log(result.location.localtime);
  //   if (loading) return <Loading />;

  // if (!result) return "no data";
  // if (!Array.isArray(result)) return "results are not array";

  // const currentWeather = Object.entries(result);
  // console.log(currentWeather);

  // const currentWeather = Object.entries(result.location).map((obj) => {
  //   console.log(obj);
  //   const { name, country } = obj;
  //   return <div>{obj}</div>;
  // });
  // console.log(currentWeather);

  // const cloudShapes = result.map((obj) => {
  //   // console.log(obj);
  //   const { location, current } = obj;
  //   return (
  //     <div>
  //       {/* <div>{result}</div> */}
  //       <h1>{location.name}</h1>
  //       <h2>{current.condition.text}</h2>{" "}
  //     </div>
  //   );
  // });

  return (
    <React.Fragment>
      <main>
        <div className="searchBar">
          {" "}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={handleChange}
              placeholder="Where do you see that oddly-shaped cloud?"
            />
            <button type="submit">There!</button>
          </form>
        </div>
        <Weather result={result} getWeather={getWeather} />
      </main>
    </React.Fragment>
  );
}
export default Search;
