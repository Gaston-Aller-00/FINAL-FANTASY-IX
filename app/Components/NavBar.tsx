'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }


  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-500 text-black">
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/">
          <Image
            src="/icons/icon.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="flex items-center gap-6 text-xl links-container">
        <Link href="/characters">Characters</Link>
        <Link href="/history">History</Link>
        <Link href="/about">FAQ</Link>
        <Link href="/FAQ">About</Link>
        <button className="md:hidden" onClick={toggleNavBar}>{isOpen ?  "t" : "hidden"} </button>
      </div>
    </nav>
  );
};

export default NavBar;
