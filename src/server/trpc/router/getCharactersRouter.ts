import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const getCharactersRouter = router({
  getCharacter: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const character = await fetch(
        `https://rickandmortyapi.com/api/character/${input.id}`
      );

      return character.json();
    }),

  getMultipleCharacters: publicProcedure
    .input(z.object({ ids: z.array(z.number()) }))
    .query(async ({ input }) => {
      const characters = await fetch(
        `https://rickandmortyapi.com/api/character/${input.ids}`
      );

      return characters.json();
    }),

  getFilteredCharacters: publicProcedure
    .input(
      z.object({
        pageFilter: z.number(),
        nameFilter: z.string(),
        statusFilter: z.string(),
        speciesFilter: z.string(),
        typeFilter: z.string(),
        genderFilter: z.string(),
      })
    )
    .query(async ({ input }) => {
      const characters = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${input.pageFilter}&name=${input.nameFilter}&status=${input.statusFilter}&species=${input.speciesFilter}&type=${input.typeFilter}&gender=${input.genderFilter}`
      );

      return characters.json();
    }),

  getAllCharacters: publicProcedure.input(z.void()).query(async () => {
    const characters = await fetch(`https://rickandmortyapi.com/api/character`);

    return characters.json();
  }),
});
