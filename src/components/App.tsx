import { useEffect, useState, ChangeEvent } from "react";
import AsideWeatherData from "./AsideWeatherData/AsideWeatherData";
import Container from "./Container/Container";
import Title from "./Title/Title";
import TripList from "./TripList/TripList";
import WeatherList from "./WeatherList/WeatherList";
import { getWeatherByDates, getWeatherByDay } from "../api/timelineWeatherAPI";
import { firstTrip } from "../data/firstTrip";
import { Trip } from "../types/tripProps";
import { ForecastByDay } from "../types/forecastByDay";
import { ForecastByDates } from "../types/ForecastByDates";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./App.module.css";
import Modal from "./Modal/Modal";

function App() {
  const [trips, setTrips] = useState([firstTrip]);
  const [currentTrip, setCurrentTrip] = useState<Trip>(trips[0]);
  const [forecastByDates, setForecastByDates] =
    useState<ForecastByDates | null>(null);
  const [forecastByDay, setForecastByDay] = useState<ForecastByDay | null>(
    null
  );
  const [search, setSearch] = useState<string>("");
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const [isActive, setIsActive] = useState(false);

  const handleCurrentTrip = (thisTrip: Trip) => {
    setCurrentTrip(thisTrip);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleToggleModal = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const filteredArray = trips.filter((trip) =>
      trip.city.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTrips(filteredArray);
  }, [search, trips]);

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
      <div className={styles.container}>
        <Title />
        <SearchBar value={search} onChange={handleSearchChange} />
        <div className={styles.containerTrips}>
          <TripList
            trips={filteredTrips}
            selectTrip={handleCurrentTrip}
            currentTrip={currentTrip}
          />
          <button onClick={handleToggleModal}>+ Add trip</button>
        </div>
        {forecastByDates && forecastByDates.days && (
          <WeatherList forecastByDates={forecastByDates.days} />
        )}
      </div>
      {forecastByDay && (
        <AsideWeatherData
          address={forecastByDay.address}
          icon={forecastByDay.days[0].icon}
          temp={forecastByDay.days[0].temp}
          datetime={forecastByDay.days[0].datetime}
          description={forecastByDay.days[0].description}
          tripStart={currentTrip.startData}
        />
      )}
      {isActive && <Modal handleToggleModal={handleToggleModal} />}
    </Container>
  );
}

export default App;
