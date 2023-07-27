"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import { calculateCarRent } from "@utils";
// import CustomButton from "./CustomButton";
// import CarDetails from "./CarDetails";
import { CustomButton, PkmnDetails } from "~~/components";
import { pokemons } from "~~/constants";
import { IPokeProps } from "~~/types";
import { generatePKMNImageUrl } from "~~/utils";

interface PkmnCardProps {
  pkmn: IPokeProps;
}

const PkmnCard = ({ pkmn }: PkmnCardProps) => {
  // const { id, name, types, results } = pkmn;
  const { name, url } = pkmn;
  const [isOpen, setIsOpen] = useState(false);
  // get id with index
  // const id = 2 + pokemons.indexOf(pkmn.name!);
  const substringToRemove = "https://pokeapi.co/api/v2/pokemon/";
  const newString = url?.replace(substringToRemove, "");
  const substringToRemoveAgain = "/";
  const id = newString?.replace(substringToRemoveAgain, "");
  const imgUrl = generatePKMNImageUrl(pkmn.name!);
  // useEffect(() => {}, [name]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="car-card group">
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon"
          fill
          priority
          className="object-contain"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-right items-center gap-2">
            <p className="text-[14px] leading-[17px]">#{id}</p>
          </div>
          <div className="flex flex-col justify-right items-center gap-2">
            <p className="car-card__icon-text">{pkmn.name}</p>
          </div>
          <div className="flex flex-col justify-right items-center gap-2">
            {/* <p className="car-card__icon-text">{types![1].type?.name}</p> */}
          </div>
        </div>

        {/* <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div> */}
      </div>

      <PkmnDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} pkmn={pkmn} />
    </div>
  );
};

export default PkmnCard;

// TODO
// https://www.pokemon.com/us/pokedex
// image
// pokemon number
// pokemon name
// type1    type2

// return (
//   <div className="car-card group">
//     <div className="car-card__content">
//       <h2 className="car-card__content-title">
//         {name}
//         {results.name}
//       </h2>

//       {/* <Image
//         src={!isLiked ? "/heart-outline.svg" : "/heart-filled.svg"}
//         width={24}
//         height={24}
//         alt="heart"
//         className="object-contain cursor-pointer mt-0.5"
//         onClick={() => setIsLiked(!isLiked)}
//       /> */}
//     </div>

//     {/* <p className="car-card__price">
//       <span className="car-card__price-dollar">$</span>
//       {carRent}
//       <span className="car-card__price-day">/day</span>
//     </p> */}

//     <div className="car-card__image">
//       <Image
//         // TODO: change src below
//         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
//         // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
//         // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shimy/${id}.png`
//         alt="car model"
//         fill
//         priority
//         className="object-contain"
//       />
//     </div>

//     <p className="car-card__price">
//       <span className="car-card__price-dollar">#</span>
//       {id}
//       <span className="car-card__price-day">/day</span>
//     </p>

//     <p className="car-card__price">{name}</p>

//     <div className="relative flex w-full mt-2">
//       <div className="car-card__icon-container">
//         <div className="car-card__icon">{/* <p className={`car-card__icon-text ${type1}`}>{types[0]}</p> */}</div>
//         <div className="car-card__icon">{/* <p className={`car-card__icon-text ${type1}`}>{type2}</p> */}</div>
//         <div className="car-card__icon">
//           <Image src="/gas.svg" width={20} height={20} alt="seat" />
//           {/* <p className="car-card__icon-text">{city_mpg} MPG</p> */}
//         </div>
//       </div>

//       <div className="car-card__btn-container">
//         <CustomButton
//           title="View More"
//           containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
//           textStyles="text-white text-[14px] leading-[17px] font-bold"
//           rightIcon="/right-arrow.svg"
//           handleClick={openModal}
//         />
//       </div>
//     </div>

//     <PkmnDetails isOpen={isOpen} closeModal={closeModal} pkmn={pkmn} />
//   </div>
// );
