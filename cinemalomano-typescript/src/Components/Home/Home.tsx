import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../lib/request";
import { Card } from "../Card/Card";
import { Description } from "../../types";
import arrowRight from "../../resources/arrow-right.png";
import arrowLeft from "../../resources/arrow-left.png";
import { Form } from "react-bootstrap";
import searchImg from '../../resources/search.png'


interface HomeState {
  setPages: React.Dispatch<React.SetStateAction<number>>;
  movies: Array<Description>;
  pages: number;
}

export const Home = ({movies, setPages, pages} : HomeState) => {
  

  // const [search, setSearch] = useState<HomeState["search"]>("");
  // const [movies, setMovies] = useState<HomeState["movies"]>([]);
  // const [pages, setPages] = useState<HomeState["pages"]>(1);

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };

  // useEffect(() => {
  //   getAllMovies(search, pages).then(setMovies);
  // }, [search, pages]);

  return (
    <>
      {/* <div> */}
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleInput}
            value={search}
          />
          <img src={searchImg} alt="" className="search"  onClick={() => {
            getAllMovies(search, pages);
          }} />
        </Form> */}
        {/* <input
          type="text"
          placeholder="Search"
          onChange={handleInput}
          value={search}
        /> */}
        {/* <button
          onClick={() => {
            getAllMovies(search, pages);
          }}
        >
          View data
        </button> */}
      {/* </div> */}
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
    </>
  );
};
