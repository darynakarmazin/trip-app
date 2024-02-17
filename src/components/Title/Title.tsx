import styles from "./Title.module.css";

function Title() {
  return (
    <h1 className={styles.heading}>
      Weather <span>Forecast</span>
    </h1>
  );
}

export default Title;
