import PaginationButton from "./PaginationButton";
import "./App.css";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (arg: number) => void;
}

function Pagination({ currentPage, totalPages, setCurrentPage }: Props) {
  let lastVisiblePage: number = 0;
  const getLastRenderedPage = () => {
    if (currentPage + 3 > totalPages) {
      lastVisiblePage = totalPages;
    } else if (currentPage < 5) {
      lastVisiblePage = 5;
    } else {
      lastVisiblePage = totalPages;
    }
  };
  getLastRenderedPage();
  const arrayRange = (start: number, stop: number) =>
    Array.from({ length: stop - start + 1 }, (value, index) => start + index);

  const pagesList: Array<number> = arrayRange(
    currentPage - 3 <= 0 ? 1 : currentPage - 3,
    lastVisiblePage,
  );

  const handleClick = (pageToLoad: number) => {
    setCurrentPage(pageToLoad);
  };

  return (
    <>
      {currentPage > 3 && (
        <>
          <PaginationButton
            currentPage={currentPage}
            pageToLoad={1}
            paginationButtonClick={handleClick}
          >
            В начало
          </PaginationButton>
          <p className="pageButton_inactive">...</p>
        </>
      )}
      {pagesList.map((pageToLoad) => (
        <PaginationButton
          key={pageToLoad}
          currentPage={currentPage}
          pageToLoad={pageToLoad}
          paginationButtonClick={handleClick}
        />
      ))}
      {lastVisiblePage < totalPages && (
        <>
          <p className="pageButton_inactive">...</p>
          <PaginationButton
            currentPage={currentPage}
            pageToLoad={currentPage + 1}
            paginationButtonClick={handleClick}
          >
            Дальше
          </PaginationButton>
        </>
      )}
    </>
  );
}

export default Pagination;
