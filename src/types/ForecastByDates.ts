import { DayForecast } from "./weatherListType";

export interface ForecastByDates {
  address: string;
  days: DayForecast[];
}
