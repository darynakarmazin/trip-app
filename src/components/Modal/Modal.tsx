import { useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  handleToggleModal: () => void;
}

function Modal({ handleToggleModal }: ModalProps) {
  useEffect(() => {
    const handleOnClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleToggleModal();
      }
    };

    window.addEventListener("keydown", handleOnClose);

    return () => {
      window.removeEventListener("keydown", handleOnClose);
    };
  }, [handleToggleModal]);

  const handleOverlyClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };
  return (
    <div className={styles.modalOverlay} onClick={handleOverlyClick}>
      <div className={styles.modalContainer}>
        <button onClick={handleToggleModal}>x</button>
        <h1>Create trip</h1>
        <form action="">
          <select></select>
          <select></select>
          <select></select>
          <div>
            <button type="reset">Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
