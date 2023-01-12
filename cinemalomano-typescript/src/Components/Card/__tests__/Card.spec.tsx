import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { Card } from "../Card";

jest.mock("../../../lib/request");

describe("renders the Card component", () => {
  
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
	];

	test("The card component does not return the back side of the card", async () => {
		render(<Card films={movies} />, { wrapper: BrowserRouter });
		const cardFaceFront = screen.getByTestId("card--movie_face--front");
		expect(cardFaceFront).toBeInTheDocument();
		expect(
			screen.queryByTestId("card--movie_face--back")
		).not.toBeInTheDocument();
	});

	test("The card component renders the back of the card at one click", async () => {
		render(
			<MemoryRouter initialEntries={["/home/123456"]}>
				<Routes>
					<Route
						path="/home/:details"
						element={<Card films={movies} />}
					></Route>
				</Routes>
			</MemoryRouter>
		);
		const cardFaceFront = screen.getByTestId("card--movie_face--front");
		fireEvent.click(cardFaceFront);

		await waitFor(() => {
			expect(screen.getByTestId("card--movie_face--back")).toBeInTheDocument();
		});
	});

});
