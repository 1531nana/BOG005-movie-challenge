import { makeRequestGetFilmId, makeRequestSearch } from "../../lib/request";
import { Description } from "../../types";
import { useState, useEffect } from "react";
import Film from "../FilmTopFive/Film";
import "./style.css";
import { Header } from "../../Components/Header/Header";
import Spinner from "react-bootstrap/Spinner";

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
  }, [pages]);

  async function miFuncionAsincrona(id: number) {
    const awardsMovies = await makeRequestGetFilmId(id).then((data) =>
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
      <section className="homePage-sectionHeader">
        <Header />
      </section>
      <div className="homePage--container">
        <h1 className="homePage--titleHome"
        data-testid='title--moviesAwards'
        >TOP FIVE WAR MOVIES AWARDS</h1>
        <main className="homePage--moviesAwards">
          {acum.length < 1 ? (
            <Spinner
              animation="border"
              variant="light"
              className="d-flex justify-content-center alig-items-center position-absolute"
            />
          ) : (
            acum.map((data, i) => <Film movies={data} key={i + 1} i={i}/>)
          )}
        </main>
      </div>
    </div>
  );
};

export default AwardsMovies;
