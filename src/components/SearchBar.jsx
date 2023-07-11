import { useEffect, useRef } from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <input
      ref={inputRef}
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search for an item"
      className="p-3 w-20 md:w-full md:mx-3 border-2 border-secondary-300 rounded-lg  "
    ></input>
  );
}

export default SearchBar;
