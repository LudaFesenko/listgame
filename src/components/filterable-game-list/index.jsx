import React, { useState } from "react";
import SearchBar from "../search-bar";
import GameList from "../game-list";

export default function FilterableGameList({ games }) {
  const [filterText, setFilterText] = useState("");
  const [inWishGame, setInWishGame] = useState(false);

  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        inWishGame={inWishGame}
        setFilterText={setFilterText}
        setInWishGame={setInWishGame}
      />
      <GameList games={games} filterText={filterText} inWishGame={inWishGame} />
    </div>
  );
}
