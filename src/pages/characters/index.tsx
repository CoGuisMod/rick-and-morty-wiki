import { useState } from "react";

import { NextPage } from "next";

import { trpc } from "../../utils/trpc";

import ReactPaginate from "react-paginate";

import CharacterCard from "../../components/elements/CharacterCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Characters: NextPage = () => {
  const [pageFilter, setPageFilter] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const filteredCharacters = trpc.getCharacters.getFilteredCharacters.useQuery({
    pageFilter: pageFilter,
    nameFilter: nameFilter,
    statusFilter: statusFilter,
    speciesFilter: speciesFilter,
    typeFilter: typeFilter,
    genderFilter: genderFilter,
  }).data;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setPageFilter(1);
    setNameFilter("");
    setStatusFilter("");
    setSpeciesFilter("");
    setTypeFilter("");
    setGenderFilter("");
  };

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

          {/* Status filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            >
              <option value="">All</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div className="py-1" />

          {/* Species filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Species:</label>
            <input
              value={speciesFilter}
              onChange={(e) => setSpeciesFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            />
          </div>

          <div className="py-1" />

          {/* Type filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Type:</label>
            <input
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            />
          </div>

          <div className="py-1" />

          {/* Gender filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Gender:</label>
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            >
              <option value="">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div className="py-2" />

          {/* Reset filter button */}
          <button className="w-full rounded-lg bg-cyan-400 px-2 py-1 font-medium text-neutral-800">
            Reset filters
          </button>
        </form>

        {/* Characters table */}
        <div className="w-full">
          <ReactPaginate
            nextLabel={<FaAngleRight />}
            breakLabel="..."
            previousLabel={<FaAngleLeft />}
            pageCount={filteredCharacters?.info.pages}
            pageRangeDisplayed={3}
            onPageChange={(e) => setPageFilter(e.selected + 1)}
            activeClassName="text-cyan-400"
            className="flex items-center justify-center gap-2 rounded-lg bg-neutral-700 px-2 py-1"
          />

          <div className="py-1" />

          {/* Characters grid */}
          <div className="xs:grid-cols-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 ">
            {filteredCharacters
              ? filteredCharacters.results.map(
                  (character: any, index: number) => (
                    <CharacterCard key={index} character={character} />
                  )
                )
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
