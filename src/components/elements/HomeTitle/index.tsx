import Link from "next/link";

const index = ({ title }: { title: string }) => {
  return (
    /* Container */
    <div className="flex items-center justify-between rounded-lg bg-neutral-700 px-2 py-1">
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* See all button */}
      <Link
        href={`/${title.toLowerCase()}`}
        className="text-lg transition-colors duration-200 ease-in-out hover:text-cyan-400"
      >
        See all
      </Link>
    </div>
  );
};

export default index;
