import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { makeRequestGetMovieIdWhitPlotFull } from "../../lib/request";
import { Description } from "../../types";
import "./style.css";
import home from "../../resources/home-modal.png";

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
      <Link to="/">
        <img src={home} alt="home" className="home--surprise" />
      </Link>
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
                  <p className="card--container_plot">{res.Plot}</p>
                  <article className="card--container_description">
                    <p>
                      <b>Genre:</b> {res.Genre}
                    </p>
                    <p>
                      {" "}
                      <b> Director: </b>
                      {res.Director}
                    </p>
                    <p>
                      {" "}
                      <b> Actors:</b> {res.Actors}
                    </p>
                    <p>
                      <b>Awards:</b> {res.Awards}
                    </p>
                    <p>
                      <b>Type: </b>
                      {res.Type}
                    </p>
                  </article>
                </article>
              </section>
            );
          })}
    </main>
  );
};
