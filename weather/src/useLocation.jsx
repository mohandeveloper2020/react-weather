import { useState } from "react";

export const useLocation = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

      // console.log(lat, lon);
    });
  };

  return { lat, lon, handleLocation };
};
