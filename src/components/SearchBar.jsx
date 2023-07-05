import { useEffect, useRef, useState } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search for an item"
      className="p-3 w-20 md:w-full md:mx-3 border-2 border-secondary-300 rounded-lg  "
    ></input>
  );
}

export default SearchBar;
