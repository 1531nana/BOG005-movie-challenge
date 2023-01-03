import { useEffect, useState } from "react";
import { Home } from "../../Components/Home/Home";
import { makeRequestSearch } from "../../lib/request";
import { Description } from "../../types";
import { Header } from "../../Components/Header/Header";
import { Search } from "../../Components/Search/Search";

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
  const [search, setSearch] = useState<HomeState["search"]>("freedom"); // Buscador

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    makeRequestSearch(search, currentPage, "movie").then((data) => {
      setMovies(data.Search);
      setTotalResults(data.totalResults);
      setCurrentPage(currentPage);
    });
  }, [currentPage, search]);

  return (
    <div className="homePage">
      <div className="homePage--containerHeader">
        <Header />
        <Search search={search} handleInput={handleInput} />
      </div>
      <div className="homePage--container">
        <h1 className="homePage--titleHome">{`ALL ${search.toUpperCase()} MOVIES`}</h1>
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
