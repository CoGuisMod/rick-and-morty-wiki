import { FaUser } from "react-icons/fa";

const index = ({ location }: { location: any }) => {
  return (
    /* Card container */
    <div className="h-full overflow-hidden rounded-lg border border-neutral-700 transition-colors duration-200 ease-in-out hover:border-cyan-400">
      {/* Info container */}
      <div className="p-2">
        {/* Name and residents container */}
        <p className="flex items-baseline justify-start gap-1 font-medium md:text-lg">
          {location.name}
          <span className="flex items-center gap-1 text-sm text-neutral-50/50">
            &#40;
            <FaUser className="text-xs" />
            {location.residents.length}
            &#41;
          </span>
        </p>

        {/* Type container */}
        <p className="font-medium md:text-lg">
          Tipo: <span className="font-normal">{location.type}</span>
        </p>

        {/* Dimension container */}
        <p className="font-medium md:text-lg">
          Dimension: <span className="font-normal">{location.dimension}</span>
        </p>
      </div>
    </div>
  );
};

export default index;
