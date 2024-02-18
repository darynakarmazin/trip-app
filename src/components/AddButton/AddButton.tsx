import { AddButtonProps } from "../../types/addButtonProps";
import styles from "./AddButton.module.css";

function AddButton({ handleToggleModal }: AddButtonProps) {
  return (
    <div>
      <button className={styles.addTripsBtn} onClick={handleToggleModal}>
        + <br />
        Add trip
      </button>
    </div>
  );
}

export default AddButton;
