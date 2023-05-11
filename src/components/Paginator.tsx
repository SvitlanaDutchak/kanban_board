import React from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
  pageNumbers?: number[];
}

export const Paginator: React.FC<Props> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  pageNumbers = [],
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getVisiblePages = (): number[] => {
    if (totalPages <= 5) {
      return pageNumbers.length
        ? pageNumbers
        : Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, -1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        -1,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      -1,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      -1,
      totalPages,
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="d-flex flex-wrap">
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {visiblePages.map((pageNumber, index) => (
        <React.Fragment key={index}>
          {pageNumber === -1 ? (
            <Pagination.Ellipsis key={pageNumber} />
          ) : (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          )}
        </React.Fragment>
      ))}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};