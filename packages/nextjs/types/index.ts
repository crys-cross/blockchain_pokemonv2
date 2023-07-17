import { MouseEventHandler } from "react";

export interface IPokemontypes {
  slot: number;
  type: string[];
}

export interface IPokeProps {
  id?: number;
  name?: string;
  types?: IPokemontypes[];
  results?: string[];
}
// export interface IPokeProps {
//   city_mpg: number;
//   class: string;
//   combination_mpg: number;
//   cylinders: number;
//   displacement: number;
//   drive: string;
//   fuel_type: string;
//   highway_mpg: number;
//   make: string;
//   model: string;
//   transmission: string;
//   year: number;
// }

export interface results {
  name: string;
  url: string;
}

export type PokeState = IPokeProps[] & { message?: string };

export interface SearchBarProps {
  setPokemonSearch: (search: string) => void;
  // setPokemonNumber: (number: string) => void;
}

export interface IFilterProps {
  pkmnSearch?: string;
  pageNumber?: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface PaginationProps {
  isNext: boolean;
  pageNumber: number;
  setPageNumber: (page: number) => void;
}

export interface SearchManuFacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}
