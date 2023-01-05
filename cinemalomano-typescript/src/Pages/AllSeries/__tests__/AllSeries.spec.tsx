import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AllSeries } from "../AllSeries";
jest.mock("../../../lib/request.ts");

describe("Render of AllSeries page", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  test("must render the AllMovies pages title", async () => {
    render(<AllSeries />, { wrapper: BrowserRouter });
    const title = screen.getByTestId("title--allSeries");

    await waitFor(() => {
      expect(title.textContent).toEqual("ALL WOMEN SERIES");
    });
  });
});
