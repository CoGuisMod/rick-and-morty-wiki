import { useEffect, useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { trpc } from "../utils/trpc";

/* Components imports */
import HomeTitle from "../components/elements/HomeTitle";
import CharacterCard from "../components/elements/CharacterCard";
import LocationCard from "../components/elements/LocationCard";
import EpisodeCard from "../components/elements/EpisodeCard";

/* Utils imports */
import getRandomCharacterIds from "../utils/getRandomCharacterIds";
import getRandomLocationIds from "../utils/getRandomLocationIds";
import getRandomEpisodeIds from "../utils/getRandomEpisodeIds";

const Home: NextPage = () => {
  const [changeCharacters, setChangeCharacters] = useState(false);
  const [changeLocations, setChangeLocations] = useState(false);
  const [changeEpisodes, setChangeEpisodes] = useState(false);

  /* Ids state */
  const [randomCharacterIds, setRandomCharacterIds] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [randomLocationsIds, setRandomLocationsIds] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [randomEpisodesIds, setRandomEpisodesIds] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  /* Makes the call to the api */
  const multipleCharacters = trpc.getCharacters.getMultipleCharacters.useQuery({
    ids: randomCharacterIds,
  }).data;

  const multipleLocations = trpc.getLocations.getMultipleLocations.useQuery({
    ids: randomLocationsIds,
  }).data;

  const multipleEpisodes = trpc.getEpisodes.getMultipleEpisodes.useQuery({
    ids: randomEpisodesIds,
  }).data;

  /* Get random ids */
  useEffect(() => {
    setRandomEpisodesIds(getRandomEpisodeIds());
  }, [changeEpisodes]);

  useEffect(() => {
    setRandomLocationsIds(getRandomLocationIds());
  }, [changeLocations]);

  useEffect(() => {
    setRandomCharacterIds(getRandomCharacterIds());
  }, [changeCharacters]);

  return (
    <>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta
          name="description"
          content="Rick and morty wiki that consumes an API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero section */}
        <section className="relative flex h-screen items-center justify-center px-4">
          {/* Background image */}
          <div className="absolute left-0 top-0 h-full w-full">
            <Image
              src="/imageHero.jpg"
              alt="Background image"
              fill
              className="-z-10  object-cover object-right brightness-50"
            />
          </div>

          {/* Title */}
          <div className="relative max-w-lg">
            <Image src="/logo.webp" alt="Logo" width={512} height={64} />
          </div>
        </section>

        {/* Content section */}
        <section className="relative px-4">
          {/* Container */}
          <div className="mx-auto -mt-16 max-w-7xl rounded-3xl bg-neutral-800 p-4">
            {/* Characters */}
            <div>
              <div className="flex flex-col">
                <HomeTitle title="Characters" />
                <button
                  onClick={() => {
                    setChangeCharacters(!changeCharacters);
                  }}
                  className="mr-auto text-neutral-50/50 transition-colors duration-200 ease-in-out hover:text-cyan-400"
                >
                  Change characters
                </button>
              </div>

              <div className="py-2" />

              <div className="xs:grid-cols-2 grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {multipleCharacters
                  ? multipleCharacters.map((character: any, index: number) => (
                      <CharacterCard key={index} character={character} />
                    ))
                  : "Loading..."}
              </div>
            </div>

            <div className="py-4" />

            {/* Locations */}
            <div>
              <HomeTitle title="Locations" />

              <div className="py-2" />

              <div className="xs:grid-cols-2 grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {multipleLocations
                  ? multipleLocations.map((location: any, index: number) => (
                      <LocationCard key={index} location={location} />
                    ))
                  : "Loading..."}
              </div>
            </div>

            <div className="py-4" />

            {/* Episodes */}
            <div>
              <HomeTitle title="Episodes" />

              <div className="py-2" />

              <div className="xs:grid-cols-2 grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {multipleEpisodes
                  ? multipleEpisodes.map((episode: any, index: number) => (
                      <EpisodeCard key={index} episode={episode} />
                    ))
                  : "Loading..."}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
