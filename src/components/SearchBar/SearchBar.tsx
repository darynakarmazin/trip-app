import { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../img/search.svg";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sortByDate: (direction: string) => void;
}

function SearchBar({ value, onChange, sortByDate }: SearchBarProps) {
  return (
    <form className={styles.imputForm}>
      <img className={styles.imputIcon} src={SearchIcon} alt="" width={20} />
      <input
        className={styles.input}
        name="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search your trip"
      />
      <div className={styles.containerSortBtn}>
        <button
          className={styles.sortBtn}
          onClick={() => sortByDate("up")}
          type="button"
        >
          Sort by nearest
        </button>
        <button
          className={styles.sortBtn}
          onClick={() => sortByDate("down")}
          type="button"
        >
          Sort by further
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
