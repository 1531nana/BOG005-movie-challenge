import { render, screen } from "@testing-library/react";
import React from "react";
import {Card} from '../Card'


jest.mock('../src/lib/request');

describe("Component Card", () => {

  test("render component Card", () => {
    
    render(
      <Card
        movies={[
          {
            Title: "Titanic",
            Plot: "titanic resumary",
            Year: 1985,
            Director: "Alan",
            Genre: "Drama",
            Actors: "Jhonny Deep",
            Awards: "3 grammys",
            Type: "movie",
            imdbID: 123456,
            Poster: "http://titanic.png",
          },
        ]}
      />
    );

    // const btnDetails = screen.getByRole("button", { name: "details" });
    // expect(btnDetails).toBeInTheDocument();
    
  });
});
