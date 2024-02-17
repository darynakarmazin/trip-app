import { ChangeEvent } from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../img/search.svg";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
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
    </form>
  );
}

export default SearchBar;
