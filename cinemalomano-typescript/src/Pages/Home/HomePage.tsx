import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home/Home";
import { Description } from "../../types";
import { useState, useEffect } from "react";
import { makeRequestSearch } from "../../lib/request";
import "./style.css";
import { Search } from "../../Components/Search/Search";

export const HomePage = () => {
  interface HomeState {
    search: string;
    movies: Array<Description>;
    pages: number;
    totalResults: string;
    pagination: number;
    currentPage: number;
  }

  const [search, setSearch] = useState<HomeState["search"]>("love"); 
  const [movies, setMovies] = useState<HomeState["movies"]>([]);
  const [totalResults, setTotalResults] = useState<HomeState["totalResults"]>();
  const [currentPage, setCurrentPage] = useState(1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    if(search.length === 0){
      setCurrentPage(1)
    }
    makeRequestSearch(search, currentPage, null, new Date().getFullYear()).then(
      (data) => {
        setMovies(data.Search);
        setTotalResults(data.totalResults);
        setCurrentPage(currentPage);
      }
    );
  }, [search, currentPage]);

 

  return (
    <div className="homePage">
      <div className="homePage--containerHeader">
        <Header />
        <Search search={search} handleInput={handleInput} />
      </div>
      <div className="homePage--container">
        <h1 className="homePage--titleHome"  
        data-testid='homePage--titleHome'
        >LATEST RELEASES</h1>
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
