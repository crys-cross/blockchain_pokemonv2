import { IFilterProps, IPokeProps } from "~~/types";

export const fetchPKMN = async (pkmnSearch: IFilterProps) => {
  // const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  // const headers: HeadersInit = {
  //   "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
  //   "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  // };

  // Set the required headers for the API request
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnSearch}`);

  // Parse the response as JSON
  const result = await response.json();
  return result;
};
