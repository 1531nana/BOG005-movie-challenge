import { useEffect, useState } from "react";
import { Home } from "../../Components/Home/Home";
import { makeRequestGetDataOfSeries } from "../../lib/request";
import { Description } from "../../types";
import home from "../../resources/home-modal.png";
import { Link } from "react-router-dom";

const AllMovies = () => {
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
    makeRequestGetDataOfSeries(currentPage, "freedom", "movie").then((data) => {
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
        <h1 className="homePage--titleHome">ALL FREEDOM FILMS</h1>
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

export default AllMovies;
