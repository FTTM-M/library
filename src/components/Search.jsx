import { FaSearch } from "react-icons/fa";

function Search({search, Searchhandler,BookHandler}) {
  return (
    <div>
      <input type="text" placeholder="Search" value={search} onChange={Searchhandler} />
      <button onClick={BookHandler}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
