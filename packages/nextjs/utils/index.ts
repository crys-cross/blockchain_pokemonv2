import { IFilterProps, IPokeProps } from "~~/types";

export async function fetchPKMN(filters: IFilterProps) {
  const { pkmnSearch, pageNumber } = filters;

  // set checks to set next/prev button
  let page;
  if (pkmnSearch === "") {
    page = `?offset=${pageNumber}&limit=20`;
  } else {
    page = "";
  }

  // Set the required headers for the API request
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnSearch}${page}`);

  // Parse the response as JSON
  const result = await response.json();
  return result;
}
