import "./style.css";
import { Description } from "../../types";
import { useState, useEffect } from "react";
import "./style.css";
import Film from "../FilmTopFive/Film";
import { makeRequestGetFilmId, makeRequestSearch } from "../../lib/request";
import Spinner from "react-bootstrap/Spinner";
import { Header } from "../../Components/Header/Header";

export const TopFiveRatingMovies = () => {
  interface RatingMovies {
    Movies: Array<Description>;
    MoviesOrder: Array<Array<Description>>;
    pages: number;
  }

  const [movies, setMovies] = useState<RatingMovies["Movies"]>([]);
  const [moviesWithDetails, setMoviesWithDetails] =
    useState<RatingMovies["MoviesOrder"]>();
  const [pages, setPages] = useState<RatingMovies["pages"]>(1);

  useEffect(() => {
    if (pages < 41) {
      makeRequestSearch("scream", pages, "movie").then((data) => {
        setMovies([...movies, data.Search]);
        setPages(pages + 1);
      });
    }
  }, [pages]);

  async function requestAMovies(id: number) {
    const ratingMovies = await makeRequestGetFilmId(id).then((request) =>
      request.map((movies) => movies)
    );
    return ratingMovies;
  }
  
  useEffect(() => {
    if (movies.length === 40) {
      const requestAllMovies = Promise.all(
        movies.flat().map(async (aMovies) => {
          return await requestAMovies(aMovies.imdbID);
        })
      );
      requestAllMovies.then((request) => {
        const sortByRatingAllMovies = request
          .flat()
          .sort(function (movieA, movieB) {
            return movieB.imdbRating - movieA.imdbRating;
          });
        setMoviesWithDetails(sortByRatingAllMovies);
      });
    }
  }, [movies]);

  let acumTopFiveRating: Description[] = [];
  if (moviesWithDetails) {
    moviesWithDetails.flat().map((aMovies) => {
      if (acumTopFiveRating.length < 5) {
        acumTopFiveRating.push(aMovies);
      }
    });
  }

  return (
    <div className="homePage">
      <section className="homePage-sectionHeader">
        <Header />
      </section>
      <div className="homePage--container">
        <h1 className="homePage--titleHome">TOP FIVE SCREAM MOVIES RATING</h1>
        <main className="homePage--moviesAwards">
          {acumTopFiveRating.length < 1 ? (
            <Spinner
              animation="border"
              variant="light"
              className="d-flex justify-content-center alig-items-center position-absolute"
            />
          ) : (
            acumTopFiveRating.map((data,i) => <Film key={i - 1} movies={data} />)
          )}
        </main>
      </div>
    </div>
  );
};
