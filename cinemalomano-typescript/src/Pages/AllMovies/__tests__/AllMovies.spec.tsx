import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllMovies from "../AllMovies";
jest.mock("../../../lib/request.ts");

describe("Render of AllMovies page", () => {
  test("must render the AllMovies pages title", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
    render(<AllMovies />, { wrapper: BrowserRouter });
    const title = screen.getByTestId("title--allMovies");

    await waitFor(() => {
      expect(title.textContent).toEqual("ALL FREEDOM MOVIES");
    });
  });
});
