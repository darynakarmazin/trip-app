import axios from "axios";
import { Trip } from "../types/tripProps";

export const fetchData = async (token: string) => {
  try {
    const response = await axios.get(
      "https://trip-app-backend-oyms.onrender.com/api/trips",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data.result;
  } catch (error) {
    console.error("Помилка при виконанні запиту:", error);
  }
};

export const postNewTrip = async (token: string, newTrip: Trip) => {
  try {
    const response = await axios.post(
      "https://trip-app-backend-oyms.onrender.com/api/trips",
      {
        city: newTrip.city,
        endData: newTrip.endData,
        imageUrl: newTrip.imageUrl,
        startData: newTrip.startData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data.result;
  } catch (error) {
    console.error("Помилка при виконанні запиту:", error);
  }
};
