import Link from "next/link";

const index = () => {
  return (
    <footer className="border-t border-neutral-700 p-4 text-center text-neutral-400/75 transition-colors duration-200 ease-in-out hover:text-neutral-400">
      <Link href="https://imcamilomillan.vercel.app/" target="_blank">
        Designed and built by{" "}
        <span className="text-purple-400/75 transition-colors duration-200 ease-in-out hover:text-purple-400">
          Camilo Millan
        </span>
      </Link>
    </footer>
  );
};

export default index;
