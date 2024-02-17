export interface TripProps {
  trip: {
    index: number;
    city: string;
    imageUrl: string;
    startData: Date;
    endData: Date;
  };
}
