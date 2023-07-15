import React from "react";
import CustomButton from "./CustomButton";
import { PaginationProps } from "~~/types";
import { IFilterProps } from "~~/types";

const Pagination = ({ isNext, pageNumber, setPageNumber }: PaginationProps) => {
  // change next value
  const handleNext = async () => {
    const pageValue = pageNumber + 20;
    setPageNumber(pageValue);
  };
  // change prev value
  const handlePrev = async () => {
    const pageValue = pageNumber - 20;
    setPageNumber(pageValue);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <>
          {pageNumber > 0 && (
            <CustomButton
              btnType="button"
              title="Show More"
              containerStyles="bg-primary-blue rounded-full text-white"
              handleClick={handlePrev}
            />
          )}
          {/* // 1280 total pokemon / 20 per page */}
          {pageNumber < 65 && (
            <CustomButton
              btnType="button"
              title="Show More"
              containerStyles="bg-primary-blue rounded-full text-white"
              handleClick={handleNext}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
