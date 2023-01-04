import React, { useState, useEffect } from "react";
import { makeRequestGetFilmId } from "../../lib/request";
import { Description } from "../../types";
import "./style.css";
import { Link, useLocation, useParams } from "react-router-dom";
import noImage from '../../resources/no-image.webp'

interface Props {
  films: Array<Description>;
}

export const Card = ({films }: Props) => {
  interface filmDetail {
    filmDetail: Array<Description>;
  }

  let { details } = useParams();

  const [filmDetails, setFilmDetails] = useState<
    filmDetail["filmDetail"]
  >([]);

  const location = useLocation();

  useEffect(() => {
    if (films) {
      films.map((film) =>
        makeRequestGetFilmId(film.imdbID).then((res) => res)
      );
    }
  }, [films, details]);

  return (
    <main className="card">
      {!films ? null : (
        <div
          className={
            location.pathname === "random-surprise"
              ? "card--movies_random"
              : "card--movies"
          }
        >
          {films.map((movie, i) => (
            <div className="card--movie" key={i}>
              <section className="card--movie--container">
                  <section
                    key={movie.imdbID}
                    className="card--movie_face --front "
                    data-testid="card--movie_face--front"
                    onClick={ () =>
                      makeRequestGetFilmId(movie.imdbID).then((res) => {
                        setFilmDetails(res);
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
                <>
                  {filmDetails.map(
                    (res, i) =>
                      res.imdbID === movie.imdbID && (
                        <Link
                          to={`/home/${res.imdbID}`}
                          className="card--movie-link"
                        >
                          <section
                            className="card--movie_face --back "
                            data-testid="card--movie_face--back"
                            key={i * 2}
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
