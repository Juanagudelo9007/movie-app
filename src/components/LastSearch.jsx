import { useRecentSearches } from "../hooks/useRecentSearches";
import SmallCard from "./SmallCard";

const LastRecent = () => {
  const { recent } = useRecentSearches();

  return (
    <div className="flex justify-center mb-12 h-[150px] ">
      {recent.length === 0 ? (
        <p>
          <i className="text-[#b3a8d6]">No Recent Searches</i>
        </p>
      ) : (
        <div>
          <p className="mb-5 text-center font-bold">
            <i className="text-[#b3a8d6]">Recently Searched</i>
          </p>
          <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {recent.map((item, index) =>
              item.movie ? (
                <SmallCard key={index} movie={item.movie} index={index} />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LastRecent;
