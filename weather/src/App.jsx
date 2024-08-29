import "./App.css";
import WeatherData from "./components/WeatherData";
import { useLocation } from "./useLocation";

function App() {
  // custom hook to get user location
  const { lat, lon, handleLocation } = useLocation();

  return (
    <div className="flex flex-col items-center p-6 my-10 mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-white">Weather App</h1>

      <button
        onClick={handleLocation}
        className="p-2 mb-4 border-2 bg-white hover:bg-gray-200 rounded"
      >
        Get weather data
      </button>

      <WeatherData LATITUDE={lat} LONGITUDE={lon} />
    </div>
  );
}

export default App;
