import React from "react";
import CustomButton from "./CustomButton";
import { PaginationProps } from "~~/types";

const Pagination = ({ isNext, pageNumber, setNext, setPrev }: PaginationProps) => {
  // change next value
  const handleNext = () => {
    const pageValue = pageNumber + 20;
    setNext(`https://pokeapi.co/api/v2/pokemon/?offset=${pageValue}&limit=20`);
  };
  // change prev value
  const handlePrev = () => {
    const pageValue = pageNumber - 20;
    setPrev(`https://pokeapi.co/api/v2/pokemon/?offset=${pageValue}&limit=20`);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <>
          <CustomButton
            btnType="button"
            title="Show More"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handlePrev}
          />

          <CustomButton
            btnType="button"
            title="Show More"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNext}
          />
        </>
      )}
    </div>
  );
};

export default Pagination;
