"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import {  } from "@constants";
import { CustomFilter, Hero, PkmnCard, SearchBar, ShowMore } from "~~/components";
import { PokeState } from "~~/types";
import { fetchPKMN } from "~~/utils";

const page = () => {
  const [allPkmn, setAllPkmn] = useState<PokeState>([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [pkmnSearch, setPkmnSearch] = useState("");
  //   const [pkmnSearch, setPkmnSearch] = useState("");

  const getPkmn = async () => {
    setLoading(true);
    try {
      const result = await fetchPKMN({
        pkmnSearch: pkmnSearch!.toLowerCase() || "",
      });

      setAllPkmn(result);
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPkmn();
  }, [pkmnSearch]);

  return (
    <main className="overflow-hidden">
      {/* pokedex banner here */}

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Pokedex</h1>
          <p>Search Pokemon Here</p>
        </div>

        <div className="home__filters">
          <SearchBar setPokemonSearch={setPkmnSearch} />

          {/* <div className="home__filter-container">
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div> */}
        </div>

        {allPkmn.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allPkmn?.map((pkmn, id) => (
                <PkmnCard key={`#${id}`} pkmn={pkmn} />
                // <PkmnCard key={`car-${index}`} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image src="./loader.svg" alt="loader" width={50} height={50} className="object-contain" />
              </div>
            )}

            {/* <ShowMore pageNumber={limit / 10} isNext={limit > allPkmn.length} setLimit={setLimit} /> */}
            {/* pagination component here */}
          </section>
        ) : (
          !loading && (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allPkmn?.message}</p>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default page;
