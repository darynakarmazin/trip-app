import { TripsProps } from "../../types/tripProps";
import TripItem from "../TripItem/TripItem";
import styles from "./TripList.module.css";

function TripsList({ trips, selectTrip, currentTrip }: TripsProps) {
  return (
    <ul className={styles.tripsList}>
      {trips.map((trip) => (
        <TripItem
          key={trip._id}
          trip={trip}
          selectTrip={() => selectTrip(trip)}
          currentTrip={currentTrip}
        ></TripItem>
      ))}
    </ul>
  );
}

export default TripsList;
