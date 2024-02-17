import { useEffect, useState } from "react";
import AsideWeatherData from "./components/AsideWeatherData/AsideWeatherData";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import TripList from "./components/TripList/TripList";
import WeatherList from "./components/WeatherList/WeatherList";
import { getWeatherByDates, getWeatherByDay } from "./api/timelineWeatherAPI";
import { firstTrip } from "./data/firstTrip";
import { Trip } from "./types/tripProps";
import { ForecastByDay } from "./types/forecastByDay";

function App() {
  const [currentTrip, setCurrentTrip] = useState(firstTrip);
  const [forecastByDates, setForecastByDates] = useState(null);
  const [forecastByDay, setForecastByDay] = useState<ForecastByDay | null>(
    null
  );

  useEffect(() => {
    if (!currentTrip) {
      return;
    }
    const getWeather = async (currentTrip: Trip) => {
      try {
        const forecastByDates = await getWeatherByDates(currentTrip);
        const forecastByDay = await getWeatherByDay(currentTrip);
        setForecastByDates(forecastByDates);
        setForecastByDay(forecastByDay);

        console.log(forecastByDates);
        console.log(forecastByDay);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather(currentTrip);
  }, [currentTrip]);
  return (
    <Container>
      <Title></Title>
      <TripList></TripList>
      <WeatherList></WeatherList>
      {forecastByDay ? (
        <AsideWeatherData
          address={forecastByDay.address}
          icon={forecastByDay.days[0].icon}
          temp={forecastByDay.days[0].temp}
          datetime={forecastByDay.days[0].datetime}
          description={forecastByDay.days[0].description}
        ></AsideWeatherData>
      ) : (
        "оберіть поїздку"
      )}
    </Container>
  );
}

export default App;
