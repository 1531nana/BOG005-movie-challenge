import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeRequestGetMovieIdWhitPlotFull } from "../../lib/request";
import { Description } from "../../types";
import "./style.css";

export const FilmDescriptionPage = () => {
  interface HomeState {
    search: string;
    movies: Array<Description>;
    pages: number;
  }

  const { details } = useParams();

  const [movie, setMovie] = useState<HomeState["movies"]>([]);

  useEffect(() => {
    if (details) {
      makeRequestGetMovieIdWhitPlotFull(details).then(setMovie);
    }
  }, [details]);

  return (
    <main className="card">
      {!movie
        ? []
        : movie.map((res) => {
            return (
              <section className="card--details">
                <article className="card--poster">
                  <img
                    src={res.Poster}
                    alt={res.Title}
                    className="card--img_poster"
                  />
                </article>
                <article className="card--description">
                  <article className="card--container_title--year">
                    <p className="card--container_title">
                      {res.Title.toUpperCase()}
                    </p>
                    <p className="card--container_year"> ({res.Year})</p>
                  </article>
                  <p>{res.Plot}</p>
                  <p>{res.Genre}</p>
                  <p>{res.Director}</p>
                  <p>{res.Actors}</p>
                  <p>{res.Awards}</p>
                  <p>{res.Type}</p>
                </article>
              </section>
            );
          })}
    </main>
  );
};
