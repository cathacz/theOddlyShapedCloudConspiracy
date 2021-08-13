import React from "react";
import Search from "./components/search/Search";
import "./sass/main.scss";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <React.Fragment>
      <main>
        <img
          src={`${process.env.PUBLIC_URL}/images/cloudConspiracy-logo.png`}
          alt="the oddly shaped cloud conspiracy – Logo"
        />
        {/* <h1>The oddly shaped Cloud Conspiracy</h1> */}
        <Search />
        <Weather />
      </main>
    </React.Fragment>
  );
}
export default App;
