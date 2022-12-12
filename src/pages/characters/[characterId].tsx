import { useRouter } from "next/router";

import { trpc } from "../../utils/trpc";

const CharacterInfo = () => {
  const router = useRouter();
  const characterId = Number(router.query.characterId);

  const character = trpc.getCharacters.getCharacter.useQuery({
    id: characterId,
  }).data;

  return (
    <section className="h-full min-h-screen px-4 pt-24">
      {character ? (
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="max-w-xs self-center overflow-hidden rounded-3xl">
              <img
                src={character.image}
                alt={character.name}
                className="h-full w-full"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold">{character.name}</p>
                <p className="text-lg font-medium text-neutral-50/50">
                  &#40;
                  {character.species}
                  {character.type ? " - " + character.type : ""}
                  &#41;
                </p>
              </div>
              <p className="text-xl font-medium">
                Gender:{" "}
                <span className="text-lg font-normal">{character.gender}</span>
              </p>
              <p className="text-xl font-medium">
                Origin:{" "}
                <span className="text-lg font-normal">
                  {character.origin.name}
                </span>
              </p>
              <p className="text-xl font-medium">
                Location:{" "}
                <span className="text-lg font-normal">
                  {character.location.name}
                </span>
              </p>
              <p className="text-xl font-medium">
                Episodes:{" "}
                <span className="text-lg font-normal">
                  {character.episode.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </section>
  );
};

export default CharacterInfo;
