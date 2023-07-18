"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import {  } from "@constants";
import { CustomFilter, Hero, Pagination, PkmnCard, SearchBar, ShowMore } from "~~/components";
import { PokeState } from "~~/types";
import { IPokeProps } from "~~/types";
import { fetchPKMN } from "~~/utils";
import { fetchPKMNCards } from "~~/utils";

const page = () => {
  const [pkmn, setPkmn] = useState([]);

  // const getPkmnCards = async () => {
  //   const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  //   const result = await data.json();
  //   setPkmn(result);
  // };

  useEffect(() => {
    // getPkmnCards();
  }, []);

  return (
    <main>
      <div>{pkmn}</div>
    </main>
  );
};

// const page = () => {
//   const [allPkmn, setAllPkmn] = useState<PokeState>([]);
//   const [loading, setLoading] = useState(false);

//   // search states
//   const [pkmnSearch, setPkmnSearch] = useState("");
//   // page button states
//   const [pageNumber, setPageNumber] = useState(0);

//   const getPkmn = async () => {
//     setLoading(true);
//     try {
//       const result = await fetchPKMN({
//         pkmnSearch: pkmnSearch!.toLowerCase() || "",
//         pageNumber: pageNumber || 0,
//       });

//       setAllPkmn(result);
//     } catch {
//       console.error();
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPkmn();
//   }, [pkmnSearch, pageNumber]);
//   console.log(allPkmn);

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

//         {allPkmn ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {allPkmn.map((pkmn, index) => (
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
//               <p>{allPkmn?.message}</p>
//             </div>
//           )
//         )}
//       </div>
//     </main>
//   );
// };

export default page;
