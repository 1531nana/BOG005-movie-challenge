import './style.css'
import { Description } from '../../../types';
import { useState, useEffect } from "react";
import "./style.css";
import Film from '../../../Pages/FilmTop/Film';
import { makeRequestGetAmountWarMovies, makeRequestGetMovieId } from '../../../lib/request';

export const TopFiveRatingsSeries = () => {
  //Batman series 

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
      makeRequestGetAmountWarMovies(pages).then((data) => {
        setMovies([...movies, data]);
        setPages(pages + 1);
      });
    }
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
    moviesWithDetails.flat().map((movie) => {
      if (movie.valueOf() !== Boolean && acum.length < 5) {
        acum.push(movie);
      }
    });
  }

  return (
    <div className="homePage">
      <div className="homePage--container">
        <h1 className="homePage--titleHome">TOP FIVE WAR MOVIES AWARDS</h1>
        <main className="homePage--moviesAwards">
          {acum.length < 1 ? null : acum.map((data) => <Film movies={data} />)}
        </main>
      </div>
    </div>
  );
};

export default TopFiveRatingsSeries;
