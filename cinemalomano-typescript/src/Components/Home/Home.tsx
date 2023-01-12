import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Description } from "../../types";
import "./style.css";
import Paginations from "../Pagination/Pagination";

interface HomeState {
  movies: Array<Description>;
  totalResults: string | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Home = ({
  movies,
  totalResults,
  currentPage,
  setCurrentPage,
}: HomeState) => {
  interface HomeState {
    pagination: number;
  }

  const [maxPageLimit, setMaxPageLimit] = useState(5); //número máximo de páginas que se van a mostrar
  const [minPageLimit, setMinPageLimit] = useState(0); //número mínimo de páginas para mostrar
  const [numberOfPages, setNumberOfPages] = useState<HomeState["pagination"]>(); //número de páginas

  const pageNumberLimit = 5;

  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="home--container">
      <Card films={movies} />
      <Paginations
        totalResults={totalResults}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPageLimit={maxPageLimit}
        minPageLimit={minPageLimit}
        numberOfPages={numberOfPages}
        setNumberOfPages={setNumberOfPages}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    </div>
  );
};
