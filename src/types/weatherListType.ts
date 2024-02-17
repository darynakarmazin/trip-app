export interface DayForecast {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  icon: string;
  description: string;
  datetimeEpoch: number;
}

export interface WeatherListProps {
  forecastByDates: DayForecast[];
}
