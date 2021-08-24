const Search = ({ data }) => {
  console.log(`data ->`, data);

  return (
    <>
      {data.current ? (
        <div className="weatherInfo">
          <div className="locCon">
            <div className="location">
              <div className="name">{data?.location?.name}</div>
              {/* <div className="region">{data?.location?.region}</div> */}
              {/* <div className="country">{data?.location?.country}</div> */}
              <div className="latLon">
                <div className="lat">latitude: {data?.location?.lat}</div>
                <div className="lon">longitude: {data?.location?.lon}</div>
              </div>
            </div>
            <div className="column">
              <div className="condition">
                <div className="text">
                  It's {data?.current?.condition?.text.toLowerCase()}.
                </div>
                <div className="cloud">
                  Around {data?.current?.cloud}% of the sky above you is covered
                  in clouds!"
                </div>
              </div>
              <div className="timestamp">
                <div className="localtime">{data?.location?.localtime}</div>
              </div>
            </div>
          </div>

          <div className="temp">
            <div className="actualTemp">
              The temperature is {data?.current?.temp_c}°C
              <div className="feelsLike">
                (but actually feels like &nbsp;{data?.current?.feelslike_c}°C)
              </div>
            </div>
          </div>
          <div className="uv">
            <div className="wearProtection">
              UV Index is {data?.current?.uv}
            </div>
            <div>
              {data?.current?.uv < 2
                ? "(no urgent need for sunscreen)"
                : "(wear sunscreen & age with grace)"}
            </div>
          </div>
          <div className="wind">
            <div className="windDir">
              Wind direction is {data?.current?.wind_dir}
            </div>
            <div className="windSpeed">
              Wind speed is {data?.current?.wind_kph}kph
            </div>
          </div>
          <div className="humidity">
            <div className="hum">{data?.current?.humidity}% humidity</div>
          </div>
          <div className="visibility">
            <div className="vis">{data?.current?.vis_km}km visibility</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Search;
