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
import { ForecastByDates } from "./types/ForecastByDates";

function App() {
  const [currentTrip, setCurrentTrip] = useState(firstTrip);
  const [forecastByDates, setForecastByDates] =
    useState<ForecastByDates | null>(null);
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
      } catch (error) {
        console.log(error);
      }
    };
    getWeather(currentTrip);
  }, [currentTrip]);
  return (
    <Container>
      <div>
        <Title></Title>
        <TripList></TripList>
        {forecastByDates && forecastByDates.days && (
          <WeatherList forecastByDates={forecastByDates.days}></WeatherList>
        )}
      </div>
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
