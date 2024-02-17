import { Weather } from "../../img/icons/Weather";
import { getDayOfWeek } from "../../servises/getDayOfWeek";
import { AsideWeatherDataProps } from "../../types/asideWeatherDataProps";
import Counter from "../Counter/Counter";
import styles from "./AsideWeatherData.module.css";

function AsideWeatherData({
  address,
  icon,
  temp,
  datetime,
  description,
  tripStart,
}: AsideWeatherDataProps) {
  return (
    <div className={styles.container}>
      <p>{getDayOfWeek(datetime)}</p>
      <div>
        <img src={Weather[icon]} alt={description} width={100} />
        <p>{temp} &#8451;</p>
      </div>
      <h2>{address}</h2>
      <Counter tripStart={tripStart} />
    </div>
  );
}

export default AsideWeatherData;
