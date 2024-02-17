export interface TripsProps {
  trips: Trip[];
  selectTrip: (trip: Trip) => void;
  currentTrip: Trip;
}

export interface TripProps {
  trip: Trip;
  selectTrip: () => void;
  currentTrip: Trip;
}

export interface Trip {
  index: string;
  city: string;
  imageUrl: string;
  startData: Date;
  endData: Date;
}
