import { FaSearch } from "react-icons/fa";

import styles from "./search.module.css";


function Search({search, Searchhandler,BookHandler}) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" value={search} onChange={Searchhandler} />
      <button onClick={BookHandler}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
