import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header";

describe("Render the Header component", () => {
  const setup = () => render(<Header />, { wrapper: BrowserRouter });

  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  });

  test('The "series" button must be in the Header component.', () => {
    setup();
    const button = screen.getByRole("button", { name: /series/i });
    expect(button).toBeInTheDocument();
  });

  test('On click of the "random surprise" button, the path changes to "/random-surprise"', async () => {
    setup();
    const linkRandomSurprise = screen.getByRole("link", {
      name: /random surprise/i,
    });
    fireEvent.click(linkRandomSurprise);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/random-surprise");
    });
  });
});
