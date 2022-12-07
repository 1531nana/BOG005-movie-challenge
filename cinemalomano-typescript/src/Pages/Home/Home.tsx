import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home/Home";
import { Description } from "../../types";
import './style.css'
import {useState, useEffect} from 'react'
import { getAllMovies } from "../../lib/request";
export const HomePage = () => {

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
    <div className="homePage">
      <Header handleInput={handleInput} search={search} pages={pages} request={getAllMovies} />
      <div className="homePage--container">
      <h1 className="homePage--titleHome">LATEST RELEASES</h1>
      {/* <Home /> */}
      </div>
    </div>
  );
};
