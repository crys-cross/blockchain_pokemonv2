"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import {  } from "@constants";
import { CustomFilter, Hero, Pagination, PkmnCard, SearchBar, ShowMore } from "~~/components";
import { HomeProps, PokeState } from "~~/types";
import { IPokeProps } from "~~/types";
import { fetchPKMN } from "~~/utils";
import { fetchPKMNCards } from "~~/utils";

const Page = async ({ searchParams }: HomeProps) => {
  const allPKMN = await fetchPKMN({
    pkmnSearch: searchParams.pkmnSearch || "",
  });

  const isDataEmpty = !Array.isArray(allPKMN) || allPKMN.length < 1 || !allPKMN;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allPKMN?.map(car => (
                <PkmnCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allPKMN.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allPKMN?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};

// export interface FetchProps {
//   count?: number;
//   next?: string;
//   previous?: string;
//   results?: string[];
// }

// export type PState = FetchProps[] & { message?: string };

//  const page = () => {
//   const [pkmn, setPkmn] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // search states
//   const [pkmnSearch, setPkmnSearch] = useState("");
//   // page button states
//   const [pageNumber, setPageNumber] = useState(0);

//   // // experimental search
//   // const getPkmnCards = async () => {
//   //   const response = await fetch("https://pokeapi.co/api/v2/pokemon");
//   //   const result = await response.json();
//   //   setPkmn(result.results);
//   // };

//   const getPkmnCards = async () => {
//     setLoading(true);
//     try {
//       const result = await fetchPKMN({
//         pkmnSearch: pkmnSearch.toLowerCase() || "",
//       });

//       setPkmn(result);
//     } catch {
//       console.error();
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPkmnCards();
//     // obj();
//   }, []);

//   return (
//     <main className="overflow-hidden">
//       {/* pokedex banner here */}

//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">Pokedex</h1>
//           <p>Search Pokemon Here</p>
//         </div>

//         <div className="home__filters">
//           <SearchBar setPokemonSearch={setPkmnSearch} />
//           {/* <div className="home__filter-container">
//             <CustomFilter options={fuels} setFilter={setFuel} />
//             <CustomFilter options={yearsOfProduction} setFilter={setYear} />
//           </div> */}
//         </div>

//         <div className="home__cars-wrapper">
//           {results.map((pkmn, index) => (
//             <p key={`#${index}`}>Pokemon Name: {pkmn.name}</p>
//             // <PkmnCard key={`car-${index}`} car={car} />
//           ))}
//         </div>

//         {pkmn.length > 0 ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {pkmn.map((pkmn, index) => (
//                 <PkmnCard key={`#${index}`} pkmn={pkmn} />
//                 // <PkmnCard key={`car-${index}`} car={car} />
//               ))}
//             </div>

//             {loading && (
//               <div className="mt-16 w-full flex-center">
//                 <Image src="./loader.svg" alt="loader" width={50} height={50} className="object-contain" />
//               </div>
//             )}

//             {/* <ShowMore pageNumber={limit / 10} isNext={limit > allPkmn.length} setLimit={setLimit} /> */}
//             {/* pagination component here */}
//             <Pagination isNext={pkmnSearch === ""} pageNumber={pageNumber} setPageNumber={setPageNumber} />
//           </section>
//         ) : (
//           !loading && (
//             <div className="home__error-container">
//               <h2 className="text-black text-xl font-bold">Oops, no results</h2>
//               {/* <p>{pkmn?.message}</p> */}
//             </div>
//           )
//         )}
//       </div>
//     </main>
//   );
// };

export default Page;
