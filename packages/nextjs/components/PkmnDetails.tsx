// import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { IPokeProps } from "~~/types";
import { fetchPKMN } from "~~/utils";

// const PkmnDetailsImage = ({ pkmn, mode }: { pkmn: IPokeProps; mode: string }) => (
//   <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
//   <Image
//     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.id}.png`}
//     alt="pkmn name"
//     fill
//     priority
//     className="object-contain"
//   />
// </div>
// );

interface PkmnDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  pkmn: IPokeProps;
}

const PkmnDetails = async ({ isOpen, closeModal, pkmn }: PkmnDetailsProps) => {
  const allPKMN = await fetchPKMN({
    pkmnSearch: pkmn.toString() || "",
  });

  const { id, name, stats, height, weight, types } = allPKMN;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="car-details__dialog-panel">
                  <button type="button" className="car-details__close-btn" onClick={closeModal}>
                    <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
                  </button>

                  <div className="flex-1 flex flex-row gap-3">
                    <div className="car-details__main-image">
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt="pokemon-default"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="car-details__main-image">
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
                        alt="pokemon-shiny"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">{name}</h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {/* {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between gap-5 w-full text-right" key={key}>
                          <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                          <p className="text-black-100 font-semibold">{value}</p>
                        </div>
                      ))} */}

                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">STATS</h4>
                        <div className="statbox">
                          <div>
                            <p>{stats && stats.length > 0 ? stats[0].base_stat : "0"}</p>
                            <p>{stats && stats.length > 0 ? stats[0].stat?.name : "hp"}</p>
                          </div>
                          <div>
                            <p>{stats && stats.length > 0 ? stats[1].base_stat : "0"}</p>
                            <p>{stats && stats.length > 0 ? stats[1].stat?.name : "attack"}</p>
                          </div>
                          <div>
                            <p>{stats && stats.length > 0 ? stats[2].base_stat : "0"}</p>
                            <p>{stats && stats.length > 0 ? stats[2].stat?.name : "defense"}</p>
                          </div>
                          <div>
                            <p>{stats && stats.length > 0 ? stats[3].base_stat : "0"}</p>
                            <p>{stats && stats.length > 0 ? stats[3].stat?.name : "special-attack"}</p>
                          </div>
                          <div>
                            <p>{stats && stats.length > 0 ? stats[4].base_stat : "0"}</p>
                            <p>{stats && stats.length > 0 ? stats[4].stat?.name : "special-defense"}</p>
                          </div>
                          <div>
                            <p>{stats && stats.length > 0 ? stats[5].base_stat : "0"}</p>
                            <p>{stats && stats.length > 0 ? stats[5].stat?.name : "speed"}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">{height}</h4>
                        <p className="text-black-100 font-semibold">{height}</p>
                      </div>

                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">{weight}</h4>
                        <p className="text-black-100 font-semibold">{weight}</p>
                      </div>

                      <div className="flex justify-between gap-5 w-full text-right">
                        <h4 className="text-grey capitalize">
                          {types && types.length > 0 ? types[0].type?.name : "N/A"}
                        </h4>
                        <p className="text-black-100 font-semibold">
                          {types && types.length > 0 ? types[0].type?.name : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PkmnDetails;

// TODO

// trigger search when pkmncard is pressed
// image(normal and shiny)
// Stats
// Pokedex entry
// Details
// types
// weakness
// evolutions
