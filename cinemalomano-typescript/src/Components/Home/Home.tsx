import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../lib/request";
import { Card } from "../Card/Card";
import { Description } from "../../types";

export const Home = () => {
    
  interface HomeState {
    search: string;
    movies: Array<Description>;
  }

  const [search, setSearch] = useState<HomeState["search"]>("");
  const [movies, setMovies] = useState<HomeState["movies"]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getAllMovies(search).then(setMovies);
    
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleInput}
        value={search}
      />
      <button
        onClick={() => {
          getAllMovies(search);
        }}
      >
        View data
      </button>
      <Card movies={movies} />
    </div>
  );
};
