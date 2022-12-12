import { useState } from "react";

import { NextPage } from "next";

import { trpc } from "../../utils/trpc";

import ReactPaginate from "react-paginate";

import LocationCard from "../../components/elements/LocationCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Locations: NextPage = () => {
  const [pageFilter, setPageFilter] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dimensionFilter, setDimensionFilter] = useState("");

  const filteredLocations = trpc.getLocations.getFilteredLocations.useQuery({
    pageFilter: pageFilter,
    nameFilter: nameFilter,
    typeFilter: typeFilter,
    dimensionFilter: dimensionFilter,
  }).data;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setPageFilter(1);
    setNameFilter("");
    setTypeFilter("");
    setDimensionFilter("");
  };

  console.log(filteredLocations);

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

          {/* Dimension filter */}
          <div className="flex items-center justify-start gap-1">
            <label className="font-medium">Dimension:</label>
            <input
              value={dimensionFilter}
              onChange={(e) => setDimensionFilter(e.target.value)}
              className="rounded-md px-1 text-neutral-800"
            />
          </div>

          <div className="py-2" />

          {/* Reset filter button */}
          <button className="w-full rounded-lg bg-cyan-400 px-2 py-1 font-medium text-neutral-800">
            Reset filters
          </button>
        </form>

        {/* Locations table */}
        <div className="w-full">
          <ReactPaginate
            nextLabel={<FaAngleRight />}
            breakLabel="..."
            previousLabel={<FaAngleLeft />}
            pageCount={filteredLocations?.info.pages}
            pageRangeDisplayed={3}
            onPageChange={(e) => setPageFilter(e.selected + 1)}
            activeClassName="text-cyan-400"
            className="flex items-center justify-center gap-2 rounded-lg bg-neutral-700 px-2 py-1"
          />

          <div className="py-1" />

          <div className="xs:grid-cols-2 grid gap-2 md:grid-cols-3 lg:grid-cols-4 ">
            {filteredLocations
              ? filteredLocations.results.map(
                  (location: any, index: number) => (
                    <LocationCard key={index} location={location} />
                  )
                )
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
