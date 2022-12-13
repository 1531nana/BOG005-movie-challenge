import { useState, useEffect } from "react";
import { Search } from "../../Components/Search/Search";
import { makeRequestGetDataOfLastestReleases } from "../../lib/request";
import { Description } from "../../types";

export const SearchPage = () => {

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
        setMovies(movies)
      };
    
      useEffect(() => {
        makeRequestGetDataOfLastestReleases(search, pages).then(setMovies);
      }, [search, pages]);

      
    return(
        <div>
            < Search 
               search={search}
               pages={pages}
               request={makeRequestGetDataOfLastestReleases}
               handleInput={handleInput}
            />
        {/* <Home movies={movies} pages={pages} setPages={setPages} /> */}

        </div>
    )
}