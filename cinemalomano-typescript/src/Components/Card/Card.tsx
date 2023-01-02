import React, { useState, useEffect } from "react";
import { makeRequestGetMovieId } from "../../lib/request";
import { Description } from "../../types";
import "./style.css";
import { Link, useLocation, useParams } from "react-router-dom";
import noImage from '../../resources/no-image.webp'

interface Props {
  movies: Array<Description>;
}

export const Card = ({ movies }: Props) => {
  interface movieDetailState {
    movieDetail: Array<Description>;
  }

  let { details } = useParams();

  const [movieDetail, setMovieDetail] = useState<
    movieDetailState["movieDetail"]
  >([]);

  const location = useLocation();

  useEffect(() => {
    if (movies) {
      console.log("movies card ", movies);

      movies.map((movie) =>
        makeRequestGetMovieId(movie.imdbID).then((res) => res)
      );
    }
  }, [movies, details]);

  return (
    <main className="card">
      {!movies ? null : (
        <div
          className={
            location.pathname === "random-surprise"
              ? "card--movies_random"
              : "card--movies"
          }
        >
          {movies.map((movie, i) => (
            <div className="card--movie" key={i}>
              <section className="card--movie--container">
                <>
                  <section
                    key={movie.imdbID}
                    className="card--movie_face --front "
                    data-testid="card--movie_face--front"
                    role="button"
                    onClick={() =>
                      makeRequestGetMovieId(movie.imdbID).then((res) => {
                        setMovieDetail(res);
                      })
                    }
                  >
                    <img
                      src={`${movie.Poster === 'N/A' ? noImage : movie.Poster} `}
                      alt={movie.Title}
                      className="card--movie_poster"
                    />
                    <div className="card--movie_face year">
                      <p>{movie.Year}</p>
                    </div>
                  </section>
                </>
                <>
                  {movieDetail.map(
                    (res, i) =>
                      res.imdbID === movie.imdbID && (
                        <Link
                          to={`/home/${res.imdbID}`}
                          className="card--movie-link"
                        >
                          <section
                            className="card--movie_face --back "
                            data-testid="card--movie_face--back"
                            key={i}
                            style={{ display: "grid" }}
                          >
                            <p style={{ fontWeight: "500" }}>
                              {res.Title.toUpperCase()}
                            </p>
                            <p>{res.Plot}</p>
                            <p>{res.Genre}</p>
                          </section>
                        </Link>
                      )
                  )}
                </>
              </section>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
