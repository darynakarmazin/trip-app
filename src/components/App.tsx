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
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "../env";
import { fetchData, postNewTrip } from "../api/tripAppBackendApi";
import { AuthUser } from "../types/authTypes";

function App() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(
    JSON.parse(localStorage.getItem("authUser") || "null")
  );
  const [trips, setTrips] = useState<Trip[]>([]);
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
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
    const fetchDataAndUpdateTrips = async () => {
      if (authUser && authUser.token) {
        try {
          const result = await fetchData(authUser.token);
          const processedTrips = result.map((trip: Trip) => ({
            ...trip,
            startData: new Date(trip.startData),
            endData: new Date(trip.endData),
          }));
          setTrips(processedTrips.length > 0 ? processedTrips : [firstTrip]);
        } catch (error) {
          console.error("Помилка при завантаженні поїздок:", error);
        }
      } else {
        const savedTrips = localStorage.getItem("trips");
        setTrips(
          savedTrips
            ? JSON.parse(savedTrips, (key, value) => {
                if (key.endsWith("Data")) {
                  return new Date(value);
                }
                return value;
              })
            : [firstTrip]
        );
      }
    };

    fetchDataAndUpdateTrips();
  }, [authUser]);

  useEffect(() => {
    if (trips.length > 0) {
      setCurrentTrip(trips[0]);
    }
  }, [trips]);

  useEffect(() => {
    if (!authUser && trips.length > 0) {
      localStorage.setItem("trips", JSON.stringify(trips));
    }
  }, [authUser, trips]);

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

  const handleCreateNewTrip = async (newTrip: Trip) => {
    if (authUser && authUser.token) {
      try {
        const result = await postNewTrip(authUser.token, newTrip);
        setTrips([
          {
            ...result,
            startData: new Date(result.startData),
            endData: new Date(result.endData),
          },
          ...trips,
        ]);
      } catch (error) {
        console.error("Помилка при створенні нової поїздки:", error);
      }
    } else {
      setTrips([newTrip, ...trips]);
    }
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
    <GoogleOAuthProvider clientId={clientId}>
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
            tripStart={currentTrip?.startData}
            setAuthUser={setAuthUser}
            authUser={authUser}
          />
        )}
        {isActive && (
          <Modal
            handleToggleModal={handleToggleModal}
            createTrip={handleCreateNewTrip}
          />
        )}
      </Container>
    </GoogleOAuthProvider>
  );
}

export default App;
