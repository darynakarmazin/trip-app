const currentDate = new Date();
const startData = new Date(currentDate.setDate(currentDate.getDate() + 1));
const endData = new Date(currentDate.setDate(currentDate.getDate() + 6));

export const firstTrip = {
  index: 18,
  city: "Kyiv, Ukraine",
  imageUrl:
    "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/kyiv_ccp4ol.webp",
  startData: startData,
  endData: endData,
};

export function formatDateString(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}.${month}.${year}`;
}
