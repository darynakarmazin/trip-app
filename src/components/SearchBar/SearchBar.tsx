import styles from "./SearchBar.module.css";
import SearchIcon from "../../img/search.svg";

function SearchBar() {
  return (
    <form className={styles.imputForm}>
      <img className={styles.imputIcon} src={SearchIcon} alt="" width={20} />
      <input
        className={styles.input}
        type="text"
        placeholder="Search your trip"
      />
    </form>
  );
}

export default SearchBar;
