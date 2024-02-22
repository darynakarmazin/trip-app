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
      await logOut(authUser.token);
      setAuthUser(null);
      localStorage.removeItem("authUser");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.googleBtn}>
        {authUser && authUser?.token ? (
          <div className={styles.googleWidget}>
            <div className={styles.googleWidgetData}>
              <p className={styles.name}>Welcome, {authUser.user.given_name}</p>
              <p className={styles.email}>{authUser.user.email}</p>
            </div>
            <img
              className={styles.img}
              width={40}
              src={authUser.user.picture}
              alt="avatar"
            />
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
    </>
  );
}

export default AsideWeatherData;
