import { Weather } from "../../img/icons/Weather";
import { WeatherListProps } from "../../types/weatherListType";
import styles from "./WeatherList.module.css";

function WeatherList({ forecastByDates }: WeatherListProps) {
  console.log(forecastByDates);
  return (
    <ul className={styles.byDatesList}>
      {forecastByDates.map((day) => (
        <li key={day.datetimeEpoch}>
          <p>{day.datetime}</p>
          <img src={Weather[day.icon]} alt={day.description} width={100} />
          <p>
            <span>{day.tempmax} &#8451;</span>/
            <span>{day.tempmin} &#8451;</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default WeatherList;
