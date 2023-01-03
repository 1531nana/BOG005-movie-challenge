/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import {Card} from '../Card'

jest.mock("../../../lib/request");

describe("Component Card", () => {

  test("Component Card render a poster", async () => {

    const movies = [
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
    ]

    act(() => render(<Card films={movies}
      /> , { wrapper: BrowserRouter }));

    const cardMovie =  screen.getByRole('img', { name: /Titanic/i })
    expect(cardMovie).toBeTruthy()
    
    await fireEvent.click(cardMovie)
    //   await waitFor(() => {
    //     expect(makeRequestGetMovieId).toBeTruthy()
    // }) 
  });
});
