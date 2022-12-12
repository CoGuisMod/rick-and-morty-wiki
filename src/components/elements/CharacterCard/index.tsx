import Link from "next/link";

const index = ({ character }: { character: any }) => {
  return (
    /* Card container */
    <Link href={`/characters/${character.id}`}>
      {/* Info container */}
      <div className="h-full overflow-hidden rounded-lg border border-neutral-700 transition-colors duration-200 ease-in-out hover:border-cyan-400">
        {/* Character image */}
        <div>
          <img src={character.image} alt={character.name} className="w-full" />
        </div>

        {/* Character name */}
        <div className="p-2">
          <p className="font-medium md:text-lg">{character.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default index;
