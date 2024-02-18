import { useEffect, useState, ChangeEvent, useRef } from "react";
import AsideWeatherData from "./AsideWeatherData/AsideWeatherData";
import Container from "./Container/Container";
import Title from "./Title/Title";
import TripList from "./TripList/TripList";
import WeatherList from "./WeatherList/WeatherList";
import { getWeatherByDates, getWeatherByDay } from "../api/timelineWeatherAPI";
import { firstTrip } from "../data/firstTrip";
import { Trip } from "../types/tripProps";
import { ForecastByDay } from "../types/forecastByDay";
import { ForecastByDates } from "../types/forecastByDatesProps";
import { onNextClick, onPreviousClick } from "../servises/scrollHelpers";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./App.module.css";
import Modal from "./Modal/Modal";
import ScrollButtons from "./ScrollButtons/ScrollButtons";
import AddButton from "./AddButton/AddButton";

function App() {
  const [trips, setTrips] = useState<Trip[]>(() => {
    const savedTrips = localStorage.getItem("trips");
    return savedTrips
      ? JSON.parse(savedTrips, (key, value) => {
          if (key.endsWith("Data")) {
            return new Date(value);
          }
          return value;
        })
      : [firstTrip];
  });
  const [currentTrip, setCurrentTrip] = useState<Trip>(trips[0]);
  const [forecastByDates, setForecastByDates] =
    useState<ForecastByDates | null>(null);
  const [forecastByDay, setForecastByDay] = useState<ForecastByDay | null>(
    null
  );
  const [search, setSearch] = useState<string>("");
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

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

  const handleCreateNewTrip = (newTrip: Trip) => {
    setTrips([newTrip, ...trips]);
  };

  const handleCurrentTrip = (thisTrip: Trip) => {
    setCurrentTrip(thisTrip);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleToggleModal = () => {
    setIsActive(!isActive);
  };

  const handleSortByDate = (direction: string) => {
    const sortedTrips = [...filteredTrips].sort((a, b) => {
      if (direction === "up") {
        return (
          new Date(a.startData).getTime() - new Date(b.startData).getTime()
        );
      } else if (direction === "down") {
        return (
          new Date(b.startData).getTime() - new Date(a.startData).getTime()
        );
      }
      return 0;
    });
    setFilteredTrips(sortedTrips);
  };

  const handleNextClick = () => {
    onNextClick(containerRef);
  };

  const handlePreviousClick = () => {
    onPreviousClick(containerRef);
  };

  return (
    <Container>
      <div className={styles.container}>
        <Title />
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          sortByDate={handleSortByDate}
        />
        <div className={styles.containerTripsBtn}>
          <ScrollButtons
            handlePreviousClick={handlePreviousClick}
            handleNextClick={handleNextClick}
          />
          <div ref={containerRef} className={styles.containerTrips}>
            <TripList
              trips={filteredTrips}
              selectTrip={handleCurrentTrip}
              currentTrip={currentTrip}
            />
            <AddButton handleToggleModal={handleToggleModal} />
          </div>
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
      {isActive && (
        <Modal
          handleToggleModal={handleToggleModal}
          createTrip={handleCreateNewTrip}
        />
      )}
    </Container>
  );
}

export default App;
