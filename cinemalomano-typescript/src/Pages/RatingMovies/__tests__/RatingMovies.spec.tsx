import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TopFiveRatingMovies } from "../RatingMovies";

jest.mock("../../../lib/request");

describe("RatingMovies page render correctly", () => {

	test("RatingThe movie page must display a descriptive title", async () => {
		
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation(() => ({
				addListener: jest.fn(),
				removeListener: jest.fn(),
			})),
		});

		render(<TopFiveRatingMovies />, { wrapper: BrowserRouter });
		
		await waitFor(() => {
			expect(screen.getAllByTestId('card--movie_face--front')).toHaveLength(5)

        })

	});
});
