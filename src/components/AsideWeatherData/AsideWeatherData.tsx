import { Weather } from "../../img/icons/Weather";
import { getDayOfWeek } from "../../servises/getDayOfWeek";

interface AsideWeatherDataProps {
  address: string;
  icon: string;
  temp: number;
  datetime: string;
  description: string;
}

function AsideWeatherData({
  address,
  icon,
  temp,
  datetime,
  description,
}: AsideWeatherDataProps) {
  return (
    <div>
      <p>{getDayOfWeek(datetime)}</p>
      <div>
        <img src={Weather[icon]} alt={description} width={100} />
        <p>{temp} &#8451;</p>
      </div>
      <h2>{address}</h2>
    </div>
  );
}

export default AsideWeatherData;
