import { TripsProps } from "../../types/tripProps";
import TripItem from "../TripItem/TripItem";

function TripsList({ trips, selectTrip }: TripsProps) {
  return (
    <ul>
      {trips.map((trip) => (
        <TripItem
          key={trip.index}
          trip={trip}
          selectTrip={() => selectTrip(trip)}
        ></TripItem>
      ))}
    </ul>
  );
}

export default TripsList;
