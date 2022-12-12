import { array, string, z } from "zod";

import { router, publicProcedure } from "../trpc";

export const getEpisodesRouter = router({
  getEpisodes: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const episode = await fetch(
        `https://rickandmortyapi.com/api/episode/${input.id}`
      );

      return episode.json();
    }),

  getMultipleEpisodes: publicProcedure
    .input(z.object({ ids: z.array(z.number()) }))
    .query(async ({ input }) => {
      const episodes = await fetch(
        `https://rickandmortyapi.com/api/episode/${input.ids}`
      );

      return episodes.json();
    }),

  getFilteredEpisodes: publicProcedure
    .input(
      z.object({
        pageFilter: z.number(),
        nameFilter: z.string(),
        episodeFilter: z.string(),
      })
    )
    .query(async ({ input }) => {
      const characters = await fetch(
        `https://rickandmortyapi.com/api/episode/?page=${input.pageFilter}&name=${input.nameFilter}&episode=${input.episodeFilter}`
      );

      return characters.json();
    }),

  getAllEpisodes: publicProcedure.input(z.void()).query(async () => {
    const episodes = await fetch(`https://rickandmortyapi.com/api/episode`);

    return episodes.json();
  }),
});
