import { formatDateString } from "../../servises/formatDateString";
import { TripProps } from "../../types/tripProps";

function TripItem({ trip, selectTrip }: TripProps) {
  return (
    <li onClick={selectTrip}>
      <img
        src={trip.imageUrl}
        alt={`${trip.city}city view`}
        loading="lazy"
        width="200"
      />
      <h1>{trip.city}</h1>
      <p>
        {formatDateString(trip.startData)} - {formatDateString(trip.endData)}
      </p>
    </li>
  );
}

export default TripItem;
