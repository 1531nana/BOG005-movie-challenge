import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TopFiveRatingsSeries from "../RatingSeries";

jest.mock("../../../lib/request");

describe("first", () => {

	beforeEach(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation(() => ({
				addListener: jest.fn(),
				removeListener: jest.fn(),
			})),
		});
	})

	test("The RatingSeries pages doesn't must  render a spinner after load the content", async () => {

        render(< TopFiveRatingsSeries />,  { wrapper: BrowserRouter })
		expect(screen.getByTestId('ratingSerie--title')).toBeInTheDocument()
    
        await waitFor(() => {
		expect(screen.queryByTestId('ratingSerie--title')).not.toBeInTheDocument()
        })
    });

	test("The RatingSeries page should render the top five series positions.", async () => {

        render(< TopFiveRatingsSeries />,  { wrapper: BrowserRouter })
		expect(screen.queryByTestId('card--movie_face--front')).not.toBeInTheDocument()
		
        await waitFor(() => {
		expect(screen.getAllByTestId('card--movie_face--front')).toHaveLength(5)
        })
    });
});
