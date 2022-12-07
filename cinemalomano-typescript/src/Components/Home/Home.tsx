import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../lib/request";
import { Card } from "../Card/Card";
import { Description } from "../../types";
import arrowRight from "../../resources/arrow-right.png";
import arrowLeft from "../../resources/arrow-left.png";

export const Home = () => {
  interface HomeState {
    search: string;
    movies: Array<Description>;
    pages: number;
  }

  const [search, setSearch] = useState<HomeState["search"]>("");
  const [movies, setMovies] = useState<HomeState["movies"]>([]);
  const [pages, setPages] = useState<HomeState["pages"]>(1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getAllMovies(search, pages).then(setMovies);
  }, [search, pages]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={handleInput}
          value={search}
        />
        <button
          onClick={() => {
            getAllMovies(search, pages);
          }}
        >
          View data
        </button>
        <Card movies={movies} />
      </div>
      <img
        src={arrowLeft}
        alt="arrow-left"
        className="arrow-left"
        onClick={() => setPages(pages - 1)}
      />
      <img
        src={arrowRight}
        alt="arrow-right"
        className="arrow-right"
        onClick={() => setPages(pages + 1)}
      />
      
    </>
  );
};
