import { logOut } from "../../api/tripAppBackendApi";
import { WeatherAside } from "../../img/icons/Weather";
import { getDayOfWeek } from "../../servises/getDayOfWeek";
import { AsideWeatherDataProps } from "../../types/asideWeatherDataProps";
import Counter from "../Counter/Counter";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import styles from "./AsideWeatherData.module.css";

function AsideWeatherData({
  address,
  icon,
  temp,
  datetime,
  description,
  tripStart,
  setAuthUser,
  authUser,
}: AsideWeatherDataProps) {
  const handleLogout = async () => {
    try {
      logOut(authUser.token);
      setAuthUser(null);
    } catch (error) {
      console.error("Помилка при створенні нової поїздки:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.googleBtn}>
        {authUser && authUser?.token ? (
          <div>
            Welcome,{authUser.user.email}{" "}
            <sup>
              <button className={styles.logoutBnt} onClick={handleLogout}>
                logout
              </button>
            </sup>
          </div>
        ) : (
          <GoogleAuth setAuthUser={setAuthUser} />
        )}
      </div>
      <p className={styles.dayOfWeek}>{getDayOfWeek(datetime)}</p>
      <div className={styles.temp}>
        <img src={WeatherAside[icon]} alt={description} width={80} />
        <p>
          {temp}
          <sup>&#8451;</sup>
        </p>
      </div>
      <h2 className={styles.cityName}>{address}</h2>
      {tripStart && <Counter tripStart={tripStart} />}
    </div>
  );
}

export default AsideWeatherData;
