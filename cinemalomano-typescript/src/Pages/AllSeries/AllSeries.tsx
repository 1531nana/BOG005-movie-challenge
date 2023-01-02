import { makeRequestGetDataOfLastestReleases, makeRequestGetDataOfSeries, makeRequestSearch } from "../../lib/request";
import { useState, useEffect } from "react";
import { Description } from "../../types";
import { Home } from "../../Components/Home/Home";
import home from "../../resources/home-modal.png";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Search } from "../../Components/Search/Search";

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
  const [search, setSearch] = useState<HomeState["search"]>("women"); // Buscador

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {

    makeRequestSearch(search, currentPage, 'series').then((data) => {
    // makeRequestGetDataOfSeries(currentPage, "women", "series").then((data) => {
      // makeRequestGetDataOfLastestReleases(search, currentPage ) 
      setMovies(data.Search);
      setTotalResults(data.totalResults);
      setCurrentPage(currentPage);
    });
  }, [currentPage, search]);

  return (
    <div className="homePage">
      <Header
        // search={search}
        // pages={currentPage}
        // request={makeRequestGetDataOfLastestReleases}
        // handleInput={handleInput}
      />
       <Search 
      search={search}
      pages={currentPage}
      request={makeRequestGetDataOfLastestReleases}
      handleInput={handleInput}/>
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
