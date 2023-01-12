import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SurprisePages } from "../SurprisePages";

jest.mock("../../../lib/request");

describe("Render SurprisePages correctly", () => {
	beforeEach(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation(() => ({
				addListener: jest.fn(),
				removeListener: jest.fn(),
			})),
		});
	});

	test("The SurprisePages page shows a random movie when clicked.", async () => {
		render(<SurprisePages />, { wrapper: BrowserRouter });

		fireEvent.click(screen.getByTestId("surprise--click"));

		await waitFor(() => {
			expect(screen.getByTestId("card--movie_face--front").textContent).toMatch(
				/2005/
			);
		});
	});
});
