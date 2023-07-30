// import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { IPokeProps } from "~~/types";

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

const PkmnDetails = ({ isOpen, closeModal, pkmn }: PkmnDetailsProps) => {
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
                        alt="pokemon"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="car-details__main-image">
                      <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt="pokemon"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between gap-5 w-full text-right" key={key}>
                          <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                          <p className="text-black-100 font-semibold">{value}</p>
                        </div>
                      ))}
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
// image(normal and shiny)
// Stats
// Pokedex entry
// Details
// types
// weakness
// evolutions
