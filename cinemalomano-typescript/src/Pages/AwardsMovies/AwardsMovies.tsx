import {
  makeRequestGetAmountWarMovies,
  makeRequestGetMovieId,
} from "../../lib/request";
import { Description } from "../../types";
import { useState, useEffect } from "react";

interface Acum {
  acum: [];
}

export const AwardsMovies = () => {
  interface Results {
    Search: Array<Description>;
    totalResults: number;
    pages: number;
    acum: Array<Acum>;
    acumAwards: Array<[string]>;
  }

  const [movies, setMovies] = useState<Results["Search"]>([]);
  const [moviesResult, setMoviesResult] =
    useState<Results["totalResults"]>(Number);
  const [pages, setPages] = useState<Results["pages"]>(1);
  const [acumAwards, setAcumAwards] = useState<Results["acumAwards"]>([]);

  //   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearch(e.target.value);
  //   };

  useEffect(() => {
    makeRequestGetAmountWarMovies(pages).then((data) => {
      setMovies(data.Search);
    
    //    else return;
      setMoviesResult(data.totalResults);
    });
  }, [pages])


  if (movies) {
        // setPages(pages + 1)
    let acum = [Array<Description>];

        movies.map((movie) =>
          makeRequestGetMovieId(movie.imdbID).then((res) => {
            const awardsWins = res.map((movie) => {
              if (movie.Awards.indexOf("wins" || "win") !== -1) {
                console.log('win');
                acum.push(movie.Awards)
                console.log('acum ',acum);
                
                // setAcumAwards(movie.Awards)
                // setPages(2)
              }
            });
            //    acum.map()
            // console.log("acum ", acum);
          })
        );
      }

  return (
    <div className="homePage">
      {/* <Header
            search={search}
            pages={pages}
            request={makeRequestGetDataOfLastestReleases}
            handleInput={handleInput}
          /> */}
      <div className="homePage--container">
        <h1 className="homePage--titleHome">TOP FIVE WAR MOVIES RATINGS</h1>
        {/* <Home movies={movies} pages={pages} setPages={setPages} /> */}
      </div>
    </div>
  );
};
