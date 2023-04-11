import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div className="flex justify-center mt-3 mb-4">
      <div className="flex">
        <button
          className="relative block rounded  py-1.5 px-3 text-natural hover:text-white hover:bg-natural_5"
          type="button"
          onClick={handlePrev}
        >
          Prev
        </button>
        <p className="relative block rounded  py-1.5 px-3 text-natural">{currentPage}</p>
        <button
          className="relative block rounded  py-1.5 px-3 text-natural hover:text-white hover:bg-natural_5"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
