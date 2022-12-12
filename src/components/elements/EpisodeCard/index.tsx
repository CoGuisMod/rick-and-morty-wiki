const index = ({ episode }: { episode: any }) => {
  return (
    /* Card container */
    <div className="h-full overflow-hidden rounded-lg border border-neutral-700 transition-colors duration-200 ease-in-out hover:border-cyan-400">
      {/* Info container */}
      <div className="p-2">
        {/* Name and episode container */}
        <p className="flex items-baseline justify-start gap-1 font-medium md:text-lg">
          {episode.name}
          <span className="flex items-center gap-1 text-sm text-neutral-50/50">
            &#40;
            {episode.episode}
            &#41;
          </span>
        </p>

        {/* Air date container */}
        <p className="font-medium md:text-lg">
          Fecha: <span className="font-normal">{episode.air_date}</span>
        </p>
      </div>
    </div>
  );
};

export default index;
