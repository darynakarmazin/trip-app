export interface AsideWeatherDataProps {
  address: string;
  icon: string;
  temp: number;
  datetime: string;
  description: string;
  tripStart: Date;
  setAuthUser: (newValue: any) => void;
}
