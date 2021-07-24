import React from "react";

const Weather = ({ result, getWeather }) => {
  console.log(result, "Penis");
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
  // console.log(arrLoc[2]);
  // console.log(curWeather);
  const lands = [result.location].map((obj, i) => {
    console.log(obj);
    let { name, region, country, lon, lat } = obj;
    // option 1 flag = flag || "./img/untitled.jpg";
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h5>City: {name}</h5>
        <h5>Region: {region}</h5>
        <h5>
          {/* {borders.map((border, i) => (
            <i key={i} onClick={() => getCountry("name", border)}>
              &nbsp;&nbsp; {border}
            </i>
          ))} */}{" "}
          we are testing here
        </h5>
        {/* <h5>
          language:
          {languages.map((lang) => (
            <h6 onClick={() => getCountry("lang", lang.iso639_1)}>
              {lang.name}
            </h6>
          ))}
        </h5>
        {
          // option 2
        }
        <img
          src={flag ? flag : "./img/untitled.jpg"}
          alt={name}
          className="flag"
        // />*/}
      </div>
    );
  });

  return (
    <React.Fragment>
      {lands}
      Hej
    </React.Fragment>
  );
};
export default Weather;
