import { Weather } from "../../img/icons/Weather";
import { getDayOfWeek } from "../../servises/getDayOfWeek";
import { WeatherListProps } from "../../types/weatherListType";
import styles from "./WeatherList.module.css";

function WeatherList({ forecastByDates }: WeatherListProps) {
  return (
    <div>
      <h2 className={styles.title}>Week</h2>
      <ul className={styles.byDatesList}>
        {forecastByDates.map((day) => (
          <li key={day.datetimeEpoch} className={styles.byDatesItem}>
            <h3 className={styles.byDatesDay}>{getDayOfWeek(day.datetime)}</h3>
            <div className={styles.byDatesIcon}>
              <img src={Weather[day.icon]} alt={day.description} width={64} />
            </div>
            <p className={styles.byDatesTemp}>
              <span>{day.tempmax}&#176;</span>/<span>{day.tempmin}&#176;</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;
