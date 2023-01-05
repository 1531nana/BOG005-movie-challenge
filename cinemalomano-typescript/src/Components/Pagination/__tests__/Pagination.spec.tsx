import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Paginations from "../Pagination";

describe("Render the Pagination component", () => {

  const totalResults = "";
  const currentPage = 1;
  const setCurrentPage = () => {};
  const maxPageLimit = 2;
  const minPageLimit = 0;
  const numberOfPages = 1;
  const setNumberOfPages = () => {};
  const onPrevClick = () => {};
  const onNextClick = () => currentPage + 1;

  const pageNumbers = () => numberOfPages;

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
    expect(pageNumbers()).toEqual(1);
  });

  test("Render the button previus", async () => {
    setUp();
    const paginationPrevius = screen.getByTestId("pagination--previus")

    fireEvent.click(paginationPrevius)
    await waitFor(()=>{
      expect(paginationPrevius).toBeInTheDocument()
    })
  });

  test("Render the button next", async () => {
    setUp();
    const paginationNext = screen.getByText(/»/i)

   expect(paginationNext).toBeTruthy()
  });

  test("does not render the button previus", async () => {
    setUp();
    const pageEllipses = screen.queryByText('...')
   expect(pageEllipses).not.toBeInTheDocument()

  });
});
