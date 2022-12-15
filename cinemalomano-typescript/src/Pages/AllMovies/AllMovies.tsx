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
  }

  const [movies, setMovies] = useState<HomeState["movies"]>([]);
  const [pages, setPages] = useState<HomeState["pages"]>(1);

  useEffect(() => {
    makeRequestGetDataOfSeries(pages, "freedom", "movie").then(setMovies);
  }, [pages]);

  return (
    <div className="homePage">
         <Link to='/'>
              <img src={home} alt="home" className="home--surprise" />
        </Link>
      <div className="homePage--container">
        <h1 className="homePage--titleHome">ALL FREEDOM FILMS</h1>
        <Home movies={movies} pages={pages} setPages={setPages} />
      </div>
    </div>
  );
};

export default AllMovies;
