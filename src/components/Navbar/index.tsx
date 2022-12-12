import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import NavMobile from "./NavMobile";

import { FaBars, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  return (
    /* Container */
    <header className="absolute z-10 w-full p-4">
      {/* Content */}
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setShowNavMobile(false)} className="z-10">
          <Image src="/logo.webp" alt="Logo" width={160} height={32} />
        </Link>

        {/* Menu button for mobile */}
        <button
          onClick={() => setShowNavMobile(!showNavMobile)}
          className="z-10 cursor-pointer text-2xl md:hidden"
        >
          <FaBars className={showNavMobile ? "hidden" : ""} />
          <FaPlus className={showNavMobile ? "rotate-45" : "hidden"} />
        </button>

        {/* Navigation links for mobile */}
        <NavMobile
          showNavMobile={showNavMobile}
          setShowNavMobile={setShowNavMobile}
        />

        {/* Navigation links */}
        <nav className="hidden gap-4 text-lg font-medium md:flex">
          <Link
            href="/characters"
            className="transition-colors duration-200 ease-in-out hover:text-cyan-400"
          >
            Characters
          </Link>
          <Link
            href="/locations"
            className="transition-colors duration-200 ease-in-out hover:text-cyan-400"
          >
            Locations
          </Link>
          <Link
            href="/episodes"
            className="transition-colors duration-200 ease-in-out hover:text-cyan-400"
          >
            Episodes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
