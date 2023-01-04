import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

interface PaginationProps {
  totalResults: string | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  maxPageLimit: number;
  minPageLimit: number;
  numberOfPages: number | undefined;
  setNumberOfPages: React.Dispatch<React.SetStateAction<number | undefined>>;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Paginations = ({
  totalResults,
  currentPage,
  maxPageLimit,
  minPageLimit,
  numberOfPages,
  setNumberOfPages,
  setCurrentPage,
  onPrevClick,
  onNextClick,
}: PaginationProps) => {
  const getNumberOfPages = () => {
    if (Number(totalResults) % 10 > 0) {
      const numberOfpages = Number(totalResults) / 10 + 1;
      setNumberOfPages(numberOfpages);
      return;
    }
    const numberOfpages = Number(totalResults) / 10;
    setNumberOfPages(numberOfpages);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    getNumberOfPages();
  });

  const getInfo = (page: number) => {
    setCurrentPage(page);
  };

  const pagesArray = [];
  for (let i = 1; i <= Number(numberOfPages); i++) {
    pagesArray.push(i);
  }

  let pageIncrementEllipses = null;
  if (pagesArray.length > maxPageLimit) {
    pageIncrementEllipses = (
      <Pagination.Ellipsis onClick={() => handleNextClick()} />
    );
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <Pagination.Ellipsis onClick={() => handlePrevClick()} />
    );
  }

  const handlePrevClick = () => {
    onPrevClick();
  };
  const handleNextClick = () => {
    onNextClick();
  };

  const pageNumbers = pagesArray.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <Pagination.Item
          key={page}
          onClick={() => getInfo(page)}
          active={currentPage === page}
        >
          {page}
        </Pagination.Item>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      {totalResults === undefined ? (
        ""
      ) : (
        <Pagination size={width < 550 ? "sm" : "lg"}>
          <Pagination.First onClick={() => getInfo(1)} />
          <Pagination.Prev
            onClick={handlePrevClick}
            data-testid="pagination--previus"
            disabled={currentPage === pagesArray[0]}
          />
          {pageDecremenEllipses}
          {pageNumbers}
          {pageIncrementEllipses}
          {pagesArray.length > Number(numberOfPages) ? (
            ""
          ) : (
            <Pagination.Next
              data-testid="pagination--next"
              onClick={handleNextClick}
              disabled={currentPage === pagesArray[pagesArray.length - 1]}
            />
          )}
          <Pagination.Last
          data-testid="pagination--last"
          onClick={() => getInfo(Number(numberOfPages))} />
        </Pagination>
      )}
    </>
  );
};

export default Paginations;
