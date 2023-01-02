import "./style.css";
import { useState } from "react";
import { makeRequestSearch } from "../../lib/request";
import { Description } from "../../types";
import { Card } from "../Card/Card";
import click from "../../resources/click.png";

export const Surprise = () => {
  interface Films {
    movies: Array<Description>;
    movieDetail: Array<Description>;
  }

  const [movies, setMovie] = useState<Films["movies"]>([]);

  const surpriseTitle = ["war", "love", "dead", "scream", "animals"];
  const surpriseType = ["movie", "series"];
  const surprisePage = [1, 2, 4, 8, 9];
  const randomTitle =
    surpriseTitle[Math.floor(Math.random() * surpriseTitle.length)];
  const randomType =
    surpriseType[Math.floor(Math.random() * surpriseType.length)];
  const randomPage =
    surprisePage[Math.floor(Math.random() * surprisePage.length)];

  return (
    <main className="surprise--container">
      <section className="surprise--container_section">
        <article className="surprise--container_box">
          <img
            src={click}
            className="surprise--click"
            alt=""
            onClick={() =>
              makeRequestSearch(randomTitle, randomPage, randomType).then(
                (res) => {
                  setMovie([res.Search[0]]);
                }
              )
            }
          />
        </article>
        <section className="surprise--cardMovie">
          <Card movies={movies} />
        </section>
      </section>
    </main>
  );
};
