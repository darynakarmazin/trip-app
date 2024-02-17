export interface TripProps {
  trip: Trip;
}

export interface Trip {
  index: string;
  city: string;
  imageUrl: string;
  startData: Date;
  endData: Date;
}
