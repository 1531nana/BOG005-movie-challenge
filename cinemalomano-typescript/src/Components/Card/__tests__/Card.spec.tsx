import { fireEvent, render, screen, waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {Card} from '../Card'

jest.mock("../../../lib/request");

describe("renders the Card component", () => {

  test("Card component renders back face with one click", async () => {

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

    render(<Card films={movies}
      /> , { wrapper: BrowserRouter });

      const cardFaceFront = screen.getByTestId("card--movie_face--front")

      expect(screen.queryByTestId("card--movie_face--back")).not.toBeInTheDocument();
      
      fireEvent.click(cardFaceFront);

      await waitFor(() => {
        expect(screen.getByTestId("card--movie_face--back")).toBeInTheDocument();
      });

  });
});
