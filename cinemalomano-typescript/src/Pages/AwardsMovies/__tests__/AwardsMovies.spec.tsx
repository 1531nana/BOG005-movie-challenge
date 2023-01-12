import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AwardsMovies from "../AwardsMovies";

jest.mock("../../../lib/request.ts");

describe("Render AwardMovies page", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  test("The AwardMovies page should render five movies", async () => {
    render(<AwardsMovies />, { wrapper: BrowserRouter });

    const moviesWithAwards = await screen.findAllByText(/1985/);
    await waitFor(() => {
      expect(moviesWithAwards).toHaveLength(5);
    });
  });

  test("The AwardMovies page should render a tittle", async () => {
    render(<AwardsMovies />, { wrapper: BrowserRouter });
    const titleAwards = screen.getByTestId("title--moviesAwards");
    await waitFor(() => {
        expect(titleAwards.textContent).toEqual("TOP FIVE WAR MOVIES AWARDS");
      });
  });
});
