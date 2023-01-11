/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Film from "../Film"

jest.mock("../../../lib/request");

describe('The Film component', () => { 

    test('should first', async () => { 

        const movies = 
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
            }
        const i = 1

        render(
			<MemoryRouter initialEntries={["/home/123456"]}>
				<Routes>
					<Route
						path="/home/:details"
						element={<Film movies={movies} i={i} />}
					></Route>
				</Routes>
			</MemoryRouter>
		);

		const cardFaceFront = screen.getByTestId("card--movie_face--front");

		expect(screen.getByRole("img", {name: 'number 2'})).toBeTruthy()

        fireEvent.click(cardFaceFront);

		await waitFor(() => {
            expect(screen.getByTestId("film-genre").textContent).toEqual('Drama');
		});
        screen.debug()
        
     })
 })