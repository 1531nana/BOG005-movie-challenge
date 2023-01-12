import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../Home";

jest.mock("../../../lib/request");

describe("Render Home component", () => {

	test("Renders the enabled and disabled buttons with respect to the click", async () => {
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
		const totalResults = "1";
		const currentPage = 1;
		const setCurrentPage = () => {};

		render(
			<Home
				movies={movies}
				totalResults={totalResults}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>,
			{ wrapper: BrowserRouter }
		);

		expect(screen.getByTestId("pagination--Item")).toBeInTheDocument();

		fireEvent.click(screen.getByTestId("pagination--previus"));

		await waitFor(() => {
			expect(screen.queryByTestId("pagination--Item")).not.toBeInTheDocument();
		});
	});
});
