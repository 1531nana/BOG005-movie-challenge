import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home/Home";
import { Description } from "../../types";
import "./style.css";
import { useState, useEffect } from "react";
import { makeRequestGetDataOfLastestReleases } from "../../lib/request";

export const HomePage = () => {
  interface HomeState {
    search: string;
    movies: Array<Description>;
    pages: number;
  }

  const [search, setSearch] = useState<HomeState["search"]>("love");
  const [movies, setMovies] = useState<HomeState["movies"]>([]);
  const [pages, setPages] = useState<HomeState["pages"]>(1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    makeRequestGetDataOfLastestReleases(search, pages).then(setMovies);
  }, [search, pages]);


  return (
    <div className="homePage">
      <Header
        search={search}
        pages={pages}
        request={makeRequestGetDataOfLastestReleases}
        handleInput={handleInput}
      />
      <div className="homePage--container">
          {/* {
          location.pathname !== '/home' || '/' ? <h1 style={{'display': 'none'}} className="homePage--titleHome">LATEST RELEASES</h1>
        }
        : */}
         <h1  className="homePage--titleHome">LATEST RELEASES</h1>
        
        <Home movies={movies} pages={pages} setPages={setPages} />
      </div>
    </div>
  );
};
