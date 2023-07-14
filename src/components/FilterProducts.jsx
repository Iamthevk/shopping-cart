function FilterProducts({ onChange }) {
  function updateSortProducts(e) {
    e.preventDefault();
    onChange(e.target.value);
  }
  return (
    <div className="mb-10 text-xl">
      <form>
        <label htmlFor="sort" className="text-primary-500 ">
          Sort By
        </label>
        <select
          onChange={updateSortProducts}
          className="sort-input ml-3"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="PRICE_LOW_TO_HIGH">price (lowest)</option>
          <option value="PRICE_HIGH_TO_LOW">price (highest)</option>
          <option value="TITLE_A_TO_Z">name (a - z)</option>
          <option value="TITLE_Z_TO_A">name (z - a)</option>
        </select>
      </form>
    </div>
  );
}

export default FilterProducts;
