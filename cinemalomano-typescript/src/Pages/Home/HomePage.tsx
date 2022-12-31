import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home/Home";
import { Description } from "../../types";
import { useState, useEffect } from "react";
import { makeRequestGetDataOfLastestReleases } from "../../lib/request";
import "./style.css";

export const HomePage = () => {
  interface HomeState {
    search: string;
    movies: Array<Description>;
    pages: number;
    totalResults: string;
    pagination: number;
    currentPage: number;
  }

  const [search, setSearch] = useState<HomeState["search"]>("love"); // Buscador
  const [movies, setMovies] = useState<HomeState["movies"]>([]); //Movies
  const [totalResults, setTotalResults] = useState<HomeState["totalResults"]>(); // Total de todas las películas
  const [currentPage, setCurrentPage] = useState(1); //página actual

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    makeRequestGetDataOfLastestReleases(search, currentPage).then((data) => {
      setMovies(data.Search);
      setTotalResults(data.totalResults);
      setCurrentPage(currentPage);
    });
  }, [search, currentPage]);

  return (
    <div className="homePage">
      <Header
        search={search}
        pages={currentPage}
        request={makeRequestGetDataOfLastestReleases}
        handleInput={handleInput}
      />
      <div className="homePage--container">
        <h1 className="homePage--titleHome">LATEST RELEASES</h1>
        {movies === undefined || movies.length === 0 ? (
          <p style={{ color: "white" }} className="homePage--noMatch">
            No match with the search
          </p>
        ) : (
          <>
            <Home
              movies={movies}
              totalResults={totalResults}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
