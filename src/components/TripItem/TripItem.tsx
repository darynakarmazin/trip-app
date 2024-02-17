import { formatDateString } from "../../servises/formatDateString";
import { TripProps } from "../../types/tripProps";
import styles from "./TripItem.module.css";

function TripItem({ trip, selectTrip, currentTrip }: TripProps) {
  const isCurrent = currentTrip.index === trip.index;

  return (
    <li
      onClick={selectTrip}
      className={`${isCurrent ? styles.current : ""} ${styles.tripItem}`}
    >
      <div className={styles.tripItemTrumb}>
        <img
          className={styles.tripItemImg}
          src={trip.imageUrl}
          alt={`${trip.city}city view`}
          width="150"
        />
      </div>
      <div className={styles.tripItemCaption}>
        <h3 className={styles.tripItemCity}>{trip.city}</h3>
        <p className={styles.tripItemData}>
          {formatDateString(trip.startData)} - {formatDateString(trip.endData)}
        </p>
      </div>
    </li>
  );
}

export default TripItem;
