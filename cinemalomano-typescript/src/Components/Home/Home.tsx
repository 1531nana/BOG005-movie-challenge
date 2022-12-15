import React from "react";
import { Card } from "../Card/Card";
import { Description } from "../../types";
import arrowRight from "../../resources/arrow-right.png";
import arrowLeft from "../../resources/arrow-left.png";
import './style.css'

interface HomeState {
  setPages: React.Dispatch<React.SetStateAction<number>>;
  movies: Array<Description>;
  pages: number;
}

export const Home = ({ movies, setPages, pages }: HomeState) => {
  return (
    <div className="home--container">
      <Card movies={movies} />
      {movies.length > 0 && (
        <section className="arrows--container">
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="arrow-left"
            onClick={() => setPages(pages - 1)}
          />
          <img
            src={arrowRight}
            alt="arrow-right"
            className="arrow-right"
            onClick={() => setPages(pages + 1)}
          />
        </section>
      )}
    </div>
  );
};
