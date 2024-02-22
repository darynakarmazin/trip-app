export interface AsideWeatherDataProps {
  address: string;
  icon: string;
  temp: number;
  datetime: string;
  description: string;
  tripStart: Date | undefined;
  setAuthUser: (newValue: any) => void;
  authUser: any;
}
