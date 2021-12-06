import React, { useState } from "react";
import "./sass/main.scss";
import Weather from "./components/weather/Weather";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState({});

  const baseURL = "https://api.weatherapi.com/v1";
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
          `The clouds in ${(location = location || "leipig")} are the worst!`
        )
      );
  };

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLocation(userInput);
    setUserInput("");
  }

  return (
    <main className="container">
      <img
        src={`${process.env.PUBLIC_URL}/images/cloudConspiracy-logo.png`}
        alt="the oddly shaped cloud conspiracy – Logo"
      />

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
        </form>
      </div>

      {result && <Weather data={result} />}
    </main>
  );
}
export default App;
