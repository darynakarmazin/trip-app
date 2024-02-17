import { nanoid } from "nanoid";
const currentDate = new Date();
const startData = new Date(currentDate.setDate(currentDate.getDate() + 1));
const endData = new Date(currentDate.setDate(currentDate.getDate() + 6));

export const firstTrip = {
  index: nanoid(),
  city: "Kyiv, Ukraine",
  imageUrl:
    "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/kyiv_ccp4ol.webp",
  startData: startData,
  endData: endData,
};
