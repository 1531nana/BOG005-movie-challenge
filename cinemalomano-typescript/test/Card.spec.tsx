import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { Card } from "../src/Components/Card";

describe("Component Card", () => {
  console.log("render ", Card);
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

    const btnLogin = screen.getByRole("button", { name: "details" });
    expect(btnLogin).toBeInTheDocument();
  });
});
