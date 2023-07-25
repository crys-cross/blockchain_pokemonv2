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

// axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
//   setPokemon(res.data.results.map(p => p.name))
// })

export async function fetchPKMNCards() {
  // const { pkmnSearch, pageNumber } = filters;

  // // set checks to set next/prev button
  // let page;
  // if (pkmnSearch === "") {
  //   page = `?offset=${pageNumber}&limit=20`;
  // } else {
  //   page = "";
  // }

  // Set the required headers for the API request
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

  // Parse the response as JSON
  const result = await response.json();
  const cards = result.data.results;
  return cards;
}

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
  stats?: string[];
}

export interface Options {
  name?: string;
  url?: string;
}

export interface Types {
  slot?: string;
  type?: Options;
}
