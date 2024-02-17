import { Weather } from "../../img/icons/Weather";
import { getDayOfWeek } from "../../servises/getDayOfWeek";
import { WeatherListProps } from "../../types/weatherListType";
import styles from "./WeatherList.module.css";

function WeatherList({ forecastByDates }: WeatherListProps) {
  return (
    <>
      <h2>Week</h2>
      <ul className={styles.byDatesList}>
        {forecastByDates.map((day) => (
          <li key={day.datetimeEpoch}>
            <p>{getDayOfWeek(day.datetime)}</p>
            <img src={Weather[day.icon]} alt={day.description} width={100} />
            <p>
              <span>{day.tempmax}&#176;</span>/<span>{day.tempmin}&#176;</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WeatherList;
