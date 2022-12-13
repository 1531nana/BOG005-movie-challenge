import { makeRequestGetDataOfSeries } from "../../lib/request"
import { useState, useEffect } from "react";
import { Description } from "../../types";
import { Home } from "../../Components/Home/Home";


export const AllSeries = () => {
    interface HomeState {
        search: string;
        movies: Array<Description>;
        pages: number;
      }
    
      const [movies, setMovies] = useState<HomeState["movies"]>([]);
      const [pages, setPages] = useState<HomeState["pages"]>(1);
    
      useEffect(() => {
        makeRequestGetDataOfSeries(pages, 'women', 'series').then(setMovies);
      }, [ pages]);
    
    
      return (
        <div className="homePage">
          <div className="homePage--container">
             <h1  className="homePage--titleHome">ALL WOMEN SERIES</h1>
            <Home movies={movies} pages={pages} setPages={setPages} />
          </div>
        </div>
      );
}