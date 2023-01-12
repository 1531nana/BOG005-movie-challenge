import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from '../HomePage'

jest.mock('../../../lib/request')

describe("Render the Homepage Page", () => {

	test("renders a page with the title of the latest released films", async () => {

        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation(() => ({
              addListener: jest.fn(),
              removeListener: jest.fn(),
            })),
          });

        render(<HomePage />, {wrapper: BrowserRouter})
       
        await waitFor(() => {
            expect(screen.getByTestId('homePage--titleHome').textContent).toEqual('LATEST RELEASES')
        })
    });
});
