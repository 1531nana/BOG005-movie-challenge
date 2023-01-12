import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { makeRequestSearch } from "../../../lib/request";
import { Surprise } from "../Surprise";

jest.mock("../../../lib/request.ts");

describe("Render Surprise component", () => {
  const setUp = () => render(<Surprise />, { wrapper: BrowserRouter });

  test("Render film random", async () => {
    setUp();
    const imageSurprise = screen.getByTestId("surprise--click");
    await waitFor(() => {
      expect(imageSurprise).toBeInTheDocument();
    });
  });

  test("Render film", async () => {
    setUp();

    const imageSurprise = screen.getByTestId("surprise--click");
    fireEvent.click(imageSurprise);

    await waitFor(() => {
      expect(makeRequestSearch).toBeDefined();
    });
  });
});
