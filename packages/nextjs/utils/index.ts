import { pokemons } from "~~/constants";
import { IFilterProps, IPokeProps } from "~~/types";

export async function fetchPKMN(filters: IFilterProps) {
  const { pkmnSearch } = filters;

  // // set checks to set next/prev button
  // let page;
  // if (pkmnSearch === "") {
  //   page = `?offset=${pageNumber}&limit=20`;
  // } else {
  //   page = "";
  // }

  // Set the required headers for the API request
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnSearch}`);

  // Parse the response as JSON
  const result = await response.json();
  return result as FetchProps;

  // // custom Parse the response as JSON
  // const result = await response.json();
  // if (pkmnSearch === "") {
  //   return result.results;
  // } else {
  //   return result.name;
  // }
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export const generatePKMNImageUrl = (name: string) => {
  const id = 2 + pokemons.indexOf(name);
  const url = new URL(
    `/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    "https://raw.githubusercontent.com",
  );

  return `${url}`;
};

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// }

export interface FetchProps {
  count?: number;
  next?: string;
  previous?: string;
  results?: Options[];
  name?: string;
  id?: string;
  types?: Types[];
  height?: number;
  weight?: number;
  stats?: Stats[];
}

export interface Options {
  name?: string;
  url?: string;
}

export interface Types {
  slot?: string;
  type?: Options;
}

export interface Stats {
  base_stat?: number;
  effort?: number;
  stat?: StatsStat;
}

export interface StatsStat {
  name?: number;
  url?: number;
}
