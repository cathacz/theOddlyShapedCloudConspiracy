import React, { useState } from "react";
import axios from "axios";
// import Weather from "../weather/Weather";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);

  const baseURL = "http://api.weatherapi.com/v1";
  const apiKey = "a6d7bfc595f44966b27135652211907"; //from https://www.weatherapi.com/

  const getLocation = (location) => {
    let textToUrl = encodeURIComponent(location);

    let endPoint = `${baseURL}/current.json?key=${apiKey}&q=${(textToUrl =
      textToUrl || "leipzig")}`;

    axios
      .get(endPoint)
      .then(({ data }) => setResult(data))
      .catch(
        console.error(
          `Nope – you took a wrong turn somewhere in ${(location =
            location || "leipig")}`
        )
      );
  };
  console.log(result);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation(userInput);

    setUserInput("");
  }

  return (
    <React.Fragment>
      <div className="main">
        <h2>Do you see a suspicious looking cloud?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Where?"
          />
          <button type="submit">There!</button>
        </form>{" "}
      </div>
      {/* weather info */}
      <div className="location">
        <div className="name">{result?.location?.name}</div>
        <div className="region">{result?.location?.region}</div>
        <div className="country">{result?.location?.country}</div>
        <div className="lat">{"latitude: " && result?.location?.lat}</div>
        <div className="lon">{"longitude: " && result?.location?.lon}</div>
      </div>
      <div className="timestamp">
        <div className="localtime">{result?.location?.localtime}</div>
      </div>
      <div className="condition">
        <div className="text">
          {"It's " && result?.current?.condition?.text}
        </div>
      </div>
      <div className="cloudsInTheSky">
        <div className="cloud">
          {result?.current?.cloud &&
            "% of the sky above you is covered in clouds!"}
        </div>
      </div>
      <div className="temp">
        <div className="actualTemp">
          {result?.current?.temp_c && "°C"}
          <div className="feelsLike">
            {"(but feels like " && result?.current?.feelslike_c && "°C)"}
          </div>
        </div>
        <div className="uv">
          <div className="wearProtection">
            {"UV Index is " && result?.current?.uv}
          </div>
          <div>
            {result?.current?.uv < 4
              ? "no urgent need for protection"
              : "wear protection – age with grace"}
          </div>

          {/* {result?.current?.uv <= 1 ? "no urgent need for protection" : result?.current?.uv<=5 ? "a little protection won't hurt" }: result?.current?.uv =10 ? "wear protection" } */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Search;
