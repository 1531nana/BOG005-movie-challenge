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
    pages: number;
    acum: Array<Acum>;
    acumAwards: Array<[string]>;
  }

  const [movies, setMovies] = useState<Results["Search"]>([]);
  const [pages, setPages] = useState<Results["pages"]>(1);
  const [film, setFilm] = useState<Results["Search"]>([]);

  useEffect(() => {
    makeRequestGetAmountWarMovies(pages).then((data) => {
      setMovies(data);
    });
  }, [pages]);

  let acum: Array<number> = [];
  const array = () =>
    movies.map((movie) =>
      makeRequestGetMovieId(movie.imdbID).then((res) => {
        res.map((movie) => {
          if (movie.Awards.indexOf("wins" || "win") !== -1) {
            const index = movie.Awards.indexOf("wins" || "win");
            const cut = parseInt(movie.Awards.substring(index - 3, index));
            acum.push(cut);
          }
          const sortedArray = acum.sort(function (a, b) {
            return b - a;
          });
          if (movie.Awards.includes(sortedArray[0])) {
            // setFilm(movie);
            return (
              <h1 style={{ zIndex: "1500" }} className="movieMap">
                {movie.Title}
              </h1>
            );
          }
        });
        //  return
      })
    );

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
        <button onClick={array}>Awards</button>
        {
          film.length === 0 ? "" : film.map((res) => <h1>{res.Title}</h1>)
          // film.map(res => <h1>{res.Title}</h1>)
        }
        {/* <p>{<AwardsMovies acum={array}/>}</p> */}
        {/* <Home movies={movies} pages={pages} setPages={setPages} /> */}
      </div>
    </div>
  );
};
