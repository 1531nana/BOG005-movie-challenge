import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Search } from "../Search";

describe("Render the Search component", () => {
  const search = "";
  const handleInput = jest.fn();

  const setUp = () =>
    render(<Search handleInput={handleInput} search={search} />);

  test("Input Search is rendered correctly", () => {
    setUp();
    const placeholderInput = screen.getByPlaceholderText("Search");
    expect(placeholderInput).toBeDefined();
  });

  test("When the input changes value, the handleInput function is called.", async () => {
    setUp();
    const inputSearch = screen.getByTestId("input--search");
    fireEvent.change(inputSearch, { target: { value: "home" } });

    await waitFor(() => {
      expect(handleInput).toBeCalled();
    });
  });
});
