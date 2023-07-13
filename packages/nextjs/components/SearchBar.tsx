"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchPokemons from "./SearchPokemons";
import { SearchBarProps } from "~~/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={"/magnifying-glass.svg"} alt={"magnifying glass"} width={40} height={40} className="object-contain" />
  </button>
);

const SearchBar = ({ setPokemonSearch }: SearchBarProps) => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchPokemon.trim() === "") return alert("Please provide some input");

    setPokemonSearch(searchPokemon);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchPokemons selected={searchPokemon} setSelected={setSearchPokemon} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      {/* <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchPokemon}
          onChange={e => setSearchModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div> */}
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
