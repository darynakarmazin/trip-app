import { TripsProps } from "../../types/tripProps";
import TripItem from "../TripItem/TripItem";

function TripsList({ trips, selectTrip, currentTrip }: TripsProps) {
  return (
    <ul>
      {trips.map((trip) => (
        <TripItem
          key={trip.index}
          trip={trip}
          selectTrip={() => selectTrip(trip)}
          currentTrip={currentTrip}
        ></TripItem>
      ))}
    </ul>
  );
}

export default TripsList;
