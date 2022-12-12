import { useState } from "react";

import { NextPage } from "next";

import { trpc } from "../../utils/trpc";

import ReactPaginate from "react-paginate";

import EpisodeCard from "../../components/elements/EpisodeCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Episodes: NextPage = () => {
  const [pageFilter, setPageFilter] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [episodeFilter, setEpisodeFilter] = useState("");

  const filteredEpisodes = trpc.getEpisodes.getFilteredEpisodes.useQuery({
    pageFilter: pageFilter,
    nameFilter: nameFilter,
    episodeFilter: episodeFilter,
  }).data;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setPageFilter(1);
    setNameFilter("");
    setEpisodeFilter("");
  };

  console.log(filteredEpisodes);

  return (
    <section className="px-4 pt-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-start gap-4 sm:flex-row">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="rounded-lg border p-2"
        >
          {/* Name filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Name:</label>
            <input
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            />
          </div>

          <div className="py-1" />

          {/* Dimension filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Dimension:</label>
            <input
              value={episodeFilter}
              onChange={(e) => setEpisodeFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            />
          </div>

          <div className="py-2" />

          {/* Reset filter button */}
          <button className="w-full rounded-lg bg-cyan-400 px-2 py-1 font-medium text-neutral-800">
            Reset filters
          </button>
        </form>

        {/* Episodes table */}
        <div className="w-full">
          <ReactPaginate
            nextLabel={<FaAngleRight />}
            breakLabel="..."
            previousLabel={<FaAngleLeft />}
            pageCount={filteredEpisodes?.info.pages}
            pageRangeDisplayed={3}
            onPageChange={(e) => setPageFilter(e.selected + 1)}
            activeClassName="text-cyan-400"
            className="flex items-center justify-center gap-2 rounded-lg bg-neutral-700 px-2 py-1"
          />

          <div className="py-1" />

          <div className="xs:grid-cols-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 ">
            {filteredEpisodes
              ? filteredEpisodes.results.map((episode: any, index: number) => (
                  <EpisodeCard key={index} episode={episode} />
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
