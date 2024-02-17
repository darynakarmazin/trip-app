import { formatDateString } from "../../data/firstTrip";
import { TripProps } from "../../types/tripProps";

function TripItem({ trip }: TripProps) {
  return (
    <li>
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
