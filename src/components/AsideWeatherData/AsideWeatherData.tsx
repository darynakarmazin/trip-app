import { Weather } from "../img/icons/Weather";

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
      <h2>{address}</h2>

      <img src={`Weather.${icon}`} alt={description} width={100} />
      <p>{temp}</p>
      <p>{datetime}</p>
    </div>
  );
}

export default AsideWeatherData;
