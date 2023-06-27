"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";

// import from "./"

export const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="flex-between w-full mb-16 pt-3">
      <div className="bg-red-700">DEV PORTFOLIO</div>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <li>
          <Link href="#myprofile">My Profile</Link>
        </li>
        <li>
          <Link href="#featured">Featured Projects</Link>
        </li>
        <li>
          <Link href="#others">Other Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact Me</Link>
        </li>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/icons/menu.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown(prev => !prev)}
            // onClick={() => setToggleDropdown(!toggleDropdown)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                My Profile
              </Link>
              <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                Featured Projects
              </Link>
              <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                Other Projects
              </Link>
              <Link href="#contact" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                Contact Me
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
};

// export default Header;
