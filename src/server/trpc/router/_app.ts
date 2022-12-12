import { router } from "../trpc";

/* Routers imports */
import { getCharactersRouter } from "./getCharactersRouter";
import { getLocationsRouter } from "./getLocationsRouter";
import { getEpisodesRouter } from "./getEpisodesRouter";

export const appRouter = router({
  getCharacters: getCharactersRouter,
  getLocations: getLocationsRouter,
  getEpisodes: getEpisodesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
