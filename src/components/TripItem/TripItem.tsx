import { formatDateString } from "../../servises/formatDateString";
import { TripProps } from "../../types/tripProps";
import styles from "./TripItem.module.css";

function TripItem({ trip, selectTrip, currentTrip }: TripProps) {
  const isCurrent = currentTrip.index === trip.index;

  return (
    <li onClick={selectTrip} className={isCurrent ? styles.current : ""}>
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
