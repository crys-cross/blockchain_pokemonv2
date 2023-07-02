import { MouseEventHandler } from "react";

export interface IPokeProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type PokeState = IPokeProps[] & { message?: string };

export interface SearchBarProps {
  setPokemonName: (name: string) => void;
  setPokemonNumber: (number: string) => void;
}

export interface IFilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
