/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsCloudsFill } from "react-icons/bs";
import { API_KEY, OPEN_WEATHER } from "../utils";
import { dateConverstion } from "../utility/dateConverstion";
import { celciusConversion } from "../utility/celciusConversion";

const WeatherData = ({ LATITUDE, LONGITUDE }) => {
  // to store fetched data
  const [weatherData, setWeatherData] = useState();

  // fetching data when dependency changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetching from url
        const data = await fetch(
          `${OPEN_WEATHER}?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`
        );
        const json = await data.json();
        console.log(json);

        // setting back the data to state
        setWeatherData(json);
      } catch (error) {
        //handling error condition
        console.log("Error fetching weather data:", error);
      }
    };

    if (LATITUDE !== undefined && LONGITUDE !== undefined) {
      fetchData();
    }
  }, [LATITUDE, LONGITUDE]);

  return (
    <>
      {weatherData && (
        <div className="border py-4 px-10 text-center bg-gray-50 rounded">
          <div className="text-sm mb-4">{dateConverstion(weatherData.dt)}</div>

          <div className="flex justify-center gap-4">
            <p>Latitude: {weatherData.coord.lat}</p>
            <p>Longitude: {weatherData.coord.lon}</p>
          </div>

          <h3 className="text-2xl font-semibold mt-2">{weatherData.name}</h3>

          <div className="flex justify-center m-6">
            <h1 className="text-8xl font-semibold">
              {celciusConversion(weatherData.main.temp)}
            </h1>
            <h5 className="text-3xl font-semibold">&deg;C</h5>
          </div>

          <div className="flex items-center justify-center mb-6 gap-2">
            {weatherData.weather[0]?.main === "Clouds" && (
              <BsCloudsFill className="text-blue-600 text-4xl" />
            )}
            <h5 className="text-xl font-semibold">
              {weatherData.weather[0]?.main}
            </h5>
            <p>({weatherData.weather[0]?.description})</p>
          </div>

          <div className="font-semibold">
            {celciusConversion(weatherData.main.temp_min)}&deg;
            {" / "}
            {celciusConversion(weatherData.main.temp_max)}&deg;
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherData;
