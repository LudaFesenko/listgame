import React from "react";

export default function SearchBar({
  filterText = "",
  inWishGame = false,
  setFilterText,
  setInWishGame,
}) {
  const handleSearch = (evt) => {
    setFilterText(evt.target.value);
  };

  return (
    <form className="filter-form ">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск по названию"
        value={filterText}
        onChange={handleSearch}
      />
      <label>
        <input
          className="in-whish-list-checkbox"
          type="checkbox"
          value={inWishGame}
          onChange={(evt) => setInWishGame(evt.target.checked)}
        />
        Только в списке желаемого
      </label>
    </form>
  );
}
