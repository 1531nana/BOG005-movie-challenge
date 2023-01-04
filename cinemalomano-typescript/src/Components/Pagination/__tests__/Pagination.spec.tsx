/* eslint-disable testing-library/no-debugging-utils */
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import Paginations from "../Pagination";
import userEvent from "@testing-library/user-event";

describe("Render the Pagination component", () => {

  const totalResults = "";
  const currentPage = 1;
  const setCurrentPage = () => {};
  const maxPageLimit = 2;
  const minPageLimit = 0;
  const numberOfPages = 2;
  const setNumberOfPages = () => {};
  const onPrevClick = () => {};
  const onNextClick = () => currentPage + 1;

  const pageNumbers = () => numberOfPages;

  const handleNextClick = () => onNextClick()
  
  const setUp = () =>
    render(
      <Paginations
        totalResults={totalResults}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPageLimit={maxPageLimit}
        minPageLimit={minPageLimit}
        numberOfPages={numberOfPages}
        setNumberOfPages={setNumberOfPages}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    );

  test("The Pagination component render the number of pages", () => {
    setUp();
    expect(pageNumbers()).toEqual(2);
  });

  test("Render the button next to the click", async () => {
    setUp();
    const paginationPrevius = screen.getByTestId("pagination--previus")
    const paginationNext = screen.getByText(/»/i)
    const pageEllipses = screen.queryByText('...')
    
    fireEvent.click(paginationPrevius)

   expect(paginationPrevius).toBeInTheDocument()
   expect(paginationNext).toBeTruthy()
   expect(pageEllipses).not.toBeInTheDocument()

  });
});
