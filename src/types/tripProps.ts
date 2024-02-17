export interface TripsProps {
  trips: Trip[];
  selectTrip: (trip: Trip) => void;
}

export interface TripProps {
  trip: Trip;
  selectTrip: () => void;
}

export interface Trip {
  index: string;
  city: string;
  imageUrl: string;
  startData: Date;
  endData: Date;
}
