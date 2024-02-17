import styles from "./Modal.module.css";

interface ModalProps {
  handleToggleOpen: () => void;
}

function Modal({ handleToggleOpen }: ModalProps) {
  return (
    <div className={styles.container}>
      <button onClick={handleToggleOpen}>x</button>
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
  );
}

export default Modal;
