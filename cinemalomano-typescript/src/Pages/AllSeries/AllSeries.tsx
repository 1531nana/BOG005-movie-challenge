import { makeRequestGetDataOfSeries } from "../../lib/request";
import { useState, useEffect } from "react";
import { Description } from "../../types";
import { Home } from "../../Components/Home/Home";
import home from "../../resources/home-modal.png";
import { Link } from "react-router-dom";

export const AllSeries = () => {
  interface HomeState {
    search: string;
    movies: Array<Description>;
    pages: number;
    totalResults: string;
  }

  const [movies, setMovies] = useState<HomeState["movies"]>([]);
  const [currentPage, setCurrentPage] = useState<HomeState["pages"]>(1);
  const [totalResults, setTotalResults] = useState<HomeState["totalResults"]>(); // Total de todas las películas

  useEffect(() => {
    makeRequestGetDataOfSeries(currentPage, "women", "series").then((data) => {
      setMovies(data.Search);
      setTotalResults(data.totalResults);
      setCurrentPage(currentPage);
    });
  }, [currentPage]);

  return (
    <div className="homePage">
      <Link to="/">
        <img src={home} alt="home" className="home--surprise" />
      </Link>
      <div className="homePage--container">
        <h1 className="homePage--titleHome">ALL WOMEN SERIES</h1>
        <Home
          movies={movies}
          totalResults={totalResults}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
