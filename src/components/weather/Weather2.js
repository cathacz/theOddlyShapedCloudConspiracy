import React from "react";
import Search from "../search/Search";

const Weather = ({ result, getLocation }) => {
  console.log(result);
  console.log(getLocation);
  // if (result !== undefined || null) {
  //   return currLoc();
  // } else {
  //   return console.log("the cloud is watching you!");
  // }
  const currLoc = [result.location].map((obj, i) => {
    console.log(obj);
    // if (obj) {
    //   const { name, region, country, lat, lon, localtime } = obj;
    // }

    return (
      <React.Fragment>
        <div className="location" key={i}>
          {obj.name && <div className="name">{obj.name}</div>}
          {/* {country && <div className="country">{country}</div>}
          {region && <div className="region">{region}</div>}
          {lat && <div className="latitude">latitude: {lat}</div>}
          {lon && <div className="longitude">longitude: {lon}</div>}
          {localtime && <div className="localtime">{localtime}</div>} */}
        </div>
      </React.Fragment>
    );
  });
  // const currCondition = [result.current.condition].map((obj, i) => {
  //   console.log(obj);
  //   const { text, icon, code } = obj;
  //   return (
  //     <React.Fragment>
  //       <div className="currentCondition" key={i}>
  //         <div className="text">{text}</div>
  //         <img className="icon" src={icon} alt="a weather icon" />
  //       </div>
  //     </React.Fragment>
  //   );
  // });
  // const currWeather = [result.current].map((obj, i) => {
  //   console.log(obj);
  //   const {
  //     cloud,
  //     temp_c,
  //     feelslike_c,
  //     humidity,
  //     uv,
  //     vis_km,
  //     wind_kph,
  //     wind_d,
  //   } = obj;
  //   return (
  //     <React.Fragment>
  //       <div className="currentWeather" key={i}>
  //         <div className="tempC">
  //           {temp_c}°C and feels like {feelslike_c}°C
  //         </div>
  //         <div className="cloud">actual clouds in the sky: {cloud}% </div>
  //         <div className="humidity">{humidity}% humidity</div>
  //         <div className="windKph">
  //           {wind_kph}kph wind from {wind_d}
  //         </div>
  //         <div className="uv">{uv}UV</div>
  //         <div className="visKm">you can see {vis_km}km</div>
  //       </div>
  //     </React.Fragment>
  //   );
  // });
  return (
    <React.Fragment>
      <div>
        {currLoc}
        {/* {currWeather}
        {currCondition} */}
      </div>
      <div></div>
      <div></div>
      {/* <div>Leck mich am A...</div>{" "} */}
    </React.Fragment>
  );
};
export default Weather;
