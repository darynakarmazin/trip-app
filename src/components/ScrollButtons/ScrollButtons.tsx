import { ScrollButtonsProps } from "../../types/scrollButtonsTypes";
import styles from "./ScrollButtons.module.css";

function ScrollButtons({
  handlePreviousClick,
  handleNextClick,
}: ScrollButtonsProps) {
  return (
    <>
      <button className={styles.scrollBtn} onClick={handlePreviousClick}>
        &#8592;
      </button>
      <button
        className={`${styles.scrollBtn} ${styles.scrollBtnRight}`}
        onClick={handleNextClick}
      >
        &#8594;
      </button>
    </>
  );
}

export default ScrollButtons;
