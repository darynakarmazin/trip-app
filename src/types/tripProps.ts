export interface TripsProps {
  trips: Trip[];
  selectTrip: (trip: Trip) => void;
  currentTrip: Trip | null;
}

export interface TripProps {
  trip: Trip;
  selectTrip: () => void;
  currentTrip: Trip | null;
}

export interface Trip {
  _id: string;
  city: string;
  imageUrl: string;
  startData: Date;
  endData: Date;
}
