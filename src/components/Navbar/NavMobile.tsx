import Link from "next/link";

import { motion } from "framer-motion";

const NavMobile = ({ showNavMobile, setShowNavMobile }: any) => {
  return (
    <motion.nav
      animate={showNavMobile ? { x: "-100%" } : { x: "0" }}
      className="fixed -right-full top-0 flex h-screen w-full origin-right flex-col items-center justify-evenly bg-neutral-800 text-3xl font-bold"
    >
      <Link
        href="/characters"
        onClick={() => setShowNavMobile(!showNavMobile)}
        className="transition-colors duration-200 ease-in-out active:text-cyan-400"
      >
        Characters
      </Link>
      <Link
        href="/locations"
        onClick={() => setShowNavMobile(!showNavMobile)}
        className="transition-colors duration-200 ease-in-out active:text-cyan-400"
      >
        Locations
      </Link>
      <Link
        href="/episodes"
        onClick={() => setShowNavMobile(!showNavMobile)}
        className="transition-colors duration-200 ease-in-out active:text-cyan-400"
      >
        Episodes
      </Link>
    </motion.nav>
  );
};

export default NavMobile;
