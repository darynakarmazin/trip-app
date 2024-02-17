import { useState } from "react";
import TripItem from "../TripItem/TripItem";
import { firstTrip } from "../../data/firstTrip";

function TripsList() {
  const [trips, setTrips] = useState([firstTrip]);
  return (
    <ul>
      {trips.map((trip) => (
        <TripItem key={trip.index} trip={trip}></TripItem>
      ))}
    </ul>
  );
}

export default TripsList;
