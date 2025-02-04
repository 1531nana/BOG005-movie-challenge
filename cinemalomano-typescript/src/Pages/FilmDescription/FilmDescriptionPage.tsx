import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeRequestGetFilmId } from "../../lib/request";
import { Description } from "../../types";
import "./style.css";
import { Header } from "../../Components/Header/Header";
import noImage from "../../resources/no-image.webp";

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
      makeRequestGetFilmId(details, "full").then((data) => {
        setMovie(data);
      });
    }
  }, [details]);

  return (
    <main className="card">
      <section className="homePage-sectionHeader">
        <Header />
      </section>
      <>
      {!movie
        ? []
        : movie.map((res, i) => {
            return (
              <section className="card--details" key={i * 5}>
                <article className="card--poster">
                  <img
                    src={`${res.Poster === "N/A" ? noImage : res.Poster} `}
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
                  <article className="card--container_description"
                  data-testid='sectionFilmDetails'
                  >
                    <p >
                      <b>Genre:</b> {res.Genre}
                    </p>
                    <p>
                      {" "}
                      <b >
                         Director: </b>
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
      
      </>
    </main>
  );
};
