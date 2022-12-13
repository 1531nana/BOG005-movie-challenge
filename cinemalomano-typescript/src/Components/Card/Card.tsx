import React, { useState, useEffect } from "react";
import { makeRequestGetMovieId } from "../../lib/request";
import { Description } from "../../types";
import "./style.css";
import { Link, useParams } from "react-router-dom";

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

  useEffect(() => {
    if (movies) {
      movies.map((movie) =>
        makeRequestGetMovieId(movie.imdbID).then((res) => res)
      );
    }
  }, [movies, details]);

  return (
    <main className="card">
      {movies ? (
        <div className="card--movies">
          {movies.map((movie, i) => (
            <div className="card--movie" key={i}>
              <>
                <section
                  key={movie.imdbID}
                  className="card--movie_face --front "
                  onClick={() =>
                    makeRequestGetMovieId(movie.imdbID).then((res) => {
                      setMovieDetail(res);
                    })
                  }
                >
                  <img
                    src={movie.Poster}
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
                  (res) =>
                    res.imdbID === movie.imdbID && (
                      <section
                        className="card--movie_face --back "
                        style={{ display: "grid" }}
                      >
                        <p style={{ fontWeight: "500" }}>
                          <Link to={`/home/${res.imdbID}`}>
                            {res.Title.toUpperCase()}
                          </Link>
                        </p>
                        <p>{res.Plot}</p>
                        <p>{res.Genre}</p>
                      </section>
                    )
                )}
              </>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
};
