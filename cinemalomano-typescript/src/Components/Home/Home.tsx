import React from "react";
import { Card } from "../Card/Card";
import { Description } from "../../types";
import arrowRight from "../../resources/arrow-right.png";
import arrowLeft from "../../resources/arrow-left.png";

interface HomeState {
  setPages: React.Dispatch<React.SetStateAction<number>>;
  movies: Array<Description>;
  pages: number;
}

export const Home = ({movies, setPages, pages} : HomeState) => {
  
  return (
      <div>
        <Card movies={movies} />
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
      </div>
  );
};
