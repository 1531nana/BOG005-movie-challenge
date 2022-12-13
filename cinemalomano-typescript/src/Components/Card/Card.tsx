import React, { useState, useEffect } from "react";
import { makeRequestGetMovieId } from "../../lib/request";
import { Description } from "../../types";
import { FilmDescription } from "../FilmDescription/FilmDescription";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface Props {
  movies: Array<Description>;
}

export const Card = ({ movies }: Props) => {

  interface movieDetailState {
    movieDetail: Array<Description>;
  }

  const [movieDetail, setMovieDetail] = useState<
    movieDetailState["movieDetail"]
  >([]);

  useEffect(() => {
    if (movies) {
      movies.map((movie) =>
        makeRequestGetMovieId(movie.imdbID).then((res) => res)
      );
    }
  }, [movies]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/film')
  };

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
                        key={res.imdbID}
                        onClick={() => {
                          <FilmDescription movies={movies} />
                          return(
                            handleClick
                          )

                        }}
                      >
                        <p style={{ fontWeight: "500" }}>
                          {res.Title.toUpperCase()}
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
