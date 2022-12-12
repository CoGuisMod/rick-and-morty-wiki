import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const getLocationsRouter = router({
  getLocation: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const location = await fetch(
        `https://rickandmortyapi.com/api/location/${input.id}`
      );

      return location.json();
    }),

  getMultipleLocations: publicProcedure
    .input(z.object({ ids: z.array(z.number()) }))
    .query(async ({ input }) => {
      const locations = await fetch(
        `https://rickandmortyapi.com/api/location/${input.ids}`
      );

      return locations.json();
    }),

  getFilteredLocations: publicProcedure
    .input(
      z.object({
        pageFilter: z.number(),
        nameFilter: z.string(),
        typeFilter: z.string(),
        dimensionFilter: z.string(),
      })
    )
    .query(async ({ input }) => {
      const characters = await fetch(
        `https://rickandmortyapi.com/api/location/?page=${input.pageFilter}&name=${input.nameFilter}&type=${input.typeFilter}&dimension=${input.dimensionFilter}`
      );

      return characters.json();
    }),

  getAllLocations: publicProcedure.input(z.void()).query(async () => {
    const locations = await fetch(`https://rickandmortyapi.com/api/location`);

    return locations.json();
  }),
});
