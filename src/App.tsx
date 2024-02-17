import AsideWeatherData from "./components/AsideWeatherData/AsideWeatherData";
import Container from "./components/Container/Container";
import Title from "./components/Title/Title";
import TripList from "./components/TripList/TripList";
import WeatherList from "./components/WeatherList/WeatherList";

function App() {
  return (
    <Container>
      <Title></Title>
      <TripList></TripList>
      <WeatherList></WeatherList>
      <AsideWeatherData></AsideWeatherData>
    </Container>
  );
}

export default App;
