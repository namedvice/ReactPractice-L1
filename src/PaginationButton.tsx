import React, { ReactNode } from "react";
import "./App.css";

export interface Props {
  currentPage: number;
  pageToLoad: number;
  children?: ReactNode;
  paginationButtonClick: (pageNumber: number) => void;
}

function PaginationButton({
  currentPage,
  pageToLoad,
  children,
  paginationButtonClick,
}: Props) {
  const style = currentPage === pageToLoad ? "pageButton_active" : "pageButton";
  const handleClick = () => {
    paginationButtonClick(pageToLoad);
  };

  return (
    <button
      type="button"
      className={style}
      key={pageToLoad}
      onClick={handleClick}
    >
      {children || pageToLoad}
    </button>
  );
}

export default PaginationButton;
