// API for getting forecast from - to for the city
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json

// API for getting today’s weather for the city
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json

import axios from "axios";
import { Trip } from "../types/tripProps";
export const API_KEY = "99X8HKFM7TZXN8KDBL4SKL5FY";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const getWeatherByDates = async (trip: Trip) => {
  try {
    const response = await axios.get(
      `${trip.city}/${trip.startData}/${trip.endData}?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`
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
