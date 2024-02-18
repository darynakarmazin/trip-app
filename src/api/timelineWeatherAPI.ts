import axios from "axios";
import { Trip } from "../types/tripProps";
export const API_KEY = "99X8HKFM7TZXN8KDBL4SKL5FY";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const getWeatherByDates = async (trip: Trip) => {
  try {
    const startDateString = trip.startData.toISOString().split("T")[0];
    const endDateString = trip.endData.toISOString().split("T")[0];
    const response = await axios.get(
      `${trip.city}/${startDateString}/${endDateString}?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherByDay = async (trip: Trip) => {
  try {
    const response = await axios.get(
      `${trip.city}/today?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
