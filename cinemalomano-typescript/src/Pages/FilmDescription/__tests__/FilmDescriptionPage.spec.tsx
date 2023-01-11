import { render, screen, waitFor } from "@testing-library/react";
import {
	MemoryRouter,
	Route,
	Routes,
} from "react-router-dom";

import { FilmDescriptionPage } from "../FilmDescriptionPage";

jest.mock("../../../lib/request.ts");

describe("first", () => {
	beforeEach(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				addListener: jest.fn(),
				removeListener: jest.fn(),
			})),
		});
	});

	test("The FilmDescriptionPage component must render a detailed description of the film with the given ID", async () => {

		render(
			<MemoryRouter initialEntries={["/home/123456"]}>
				<Routes>
					<Route
						path="/home/:details"
						element={<FilmDescriptionPage />}
					></Route>
				</Routes>
			</MemoryRouter>
		);

		await waitFor(() => {
			expect(screen.getByTestId("sectionFilmDetails")).toBeInTheDocument();
		});
	});
});
