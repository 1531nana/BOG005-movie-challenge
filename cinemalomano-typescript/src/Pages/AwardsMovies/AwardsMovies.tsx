import { makeRequestGetMovieId, makeRequestSearch } from "../../lib/request";
import { Description } from "../../types";
import { useState, useEffect } from "react";
import Film from "../FilmTop/Film";
import "./style.css";
import { Header } from "../../Components/Header/Header";

export const AwardsMovies = () => {
  interface AwardsMovies {
    Movies: Array<Description>;
    Movies1: Array<Array<Description>>;
    Films: Array<Description>;
    ids: Array<number>;
    pages: number;
  }

  const [movies, setMovies] = useState<AwardsMovies["Movies"]>([]);
  const [moviesWithDetails, setMoviesWithDetails] =
    useState<AwardsMovies["Movies1"]>();
  const [pages, setPages] = useState<AwardsMovies["pages"]>(1);

  useEffect(() => {
    if (pages < 12) {
      makeRequestSearch("war", pages, "movie", 2021).then((data) => {
        setMovies([...movies, data.Search]);
        setPages(pages + 1);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  async function miFuncionAsincrona(id: number) {
    const awardsMovies = await makeRequestGetMovieId(id).then((data) =>
      data
        .filter((movie) => movie.Awards.indexOf("wins") !== -1)
        .map((award) => award)
    );
    return awardsMovies;
  }

  useEffect(() => {
    if (movies.length === 11) {
      const results = Promise.all(
        movies.flat().map(async (dato) => {
          return await miFuncionAsincrona(dato.imdbID);
        })
      );
      results.then((data) => setMoviesWithDetails(data));
    }
  }, [movies]);

  let acum: Description[] = [];
  if (moviesWithDetails) {
    // eslint-disable-next-line array-callback-return
    moviesWithDetails.flat().map((movie) => {
      if (movie.valueOf() !== Boolean && acum.length < 5) {
        acum.push(movie);
      }
    });
  }

  return (
    <div className="homePage">
      <Header />
      <div className="homePage--container">
        <h1 className="homePage--titleHome">TOP FIVE WAR MOVIES AWARDS</h1>
        <main className="homePage--moviesAwards">
          {acum.length < 1 ? null : acum.map((data) => <Film movies={data} />)}
        </main>
      </div>
    </div>
  );
};

export default AwardsMovies;
