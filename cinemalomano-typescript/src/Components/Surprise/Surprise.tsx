import "./style.css";
import { useState } from "react";
import { makeRequestGetDataSurprise } from "../../lib/request";
import { Description } from "../../types";
import { Card } from "../Card/Card";
import surprise from "../../resources/random.png";
import click from "../../resources/click.png";
import home from "../../resources/home-modal.png";
import { Link } from "react-router-dom";

export const Surprise = () => {
  interface Films {
    movies: Array<Description>;
    movieDetail: Array<Description>;
  }

  const [movies, setMovie] = useState<Films["movies"]>([]);
  
  const surpriseTitle = ["war", "love", "dead", "scream", "animals"];
  const surpriseType = ["movie", "series"];
  const randomTitle =
    surpriseTitle[Math.floor(Math.random() * surpriseTitle.length)];
  const randomType =
    surpriseType[Math.floor(Math.random() * surpriseType.length)];

  return (
    <main className="surprise--container">
         <Link to='/'>
              <img src={home} alt="home" className="home--surprise" />
        </Link>
    {/* <img src={home} alt="" className="home--surprise" /> */}
    <section className="surprise--container_section">
        <article className="surprise--container_box">
              <img src={surprise} alt="" className="surprise--box" />
            
            <img
                src={click}
                className='surprise--click'
                alt=""
                onClick={() =>
                makeRequestGetDataSurprise(randomTitle, randomType).then((res) => {
                    setMovie(res);
                })
                }
            />
        <Card movies={movies} />
        </article>
    </section>
    </main>
  );
};
