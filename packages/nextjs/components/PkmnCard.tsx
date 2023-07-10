"use client";

import { useState } from "react";
import Image from "next/image";
// import { calculateCarRent } from "@utils";
// import CustomButton from "./CustomButton";
// import CarDetails from "./CarDetails";
import { IPokeProps } from "~~/types";

interface PkmnCardProps {
  pkmn: IPokeProps;
}

const PkmnCard = ({ pkmn }: PkmnCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // const {} = pkmn;

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return <div>PkmnCard</div>;
};

export default PkmnCard;

// TODO
// https://www.pokemon.com/us/pokedex
// image
// pokemon number
// pokemon name
// type1    type2
