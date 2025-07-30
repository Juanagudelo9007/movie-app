import { useRecentSearches } from "../hooks/useRecentSearches";
import Card from "./Card";

const Recent = () => {
  const { recent } = useRecentSearches();
   console.log('the recent movie is', recent);
  return (
    <div className="flex  justify-center h-[100px]">
      <div  className="flex justify-center items-center gap-4">
        {recent.length === 0 ? (
          <div>
            <p>
              <i>No Recent Searches</i>
            </p>
          </div>
        ) : (
          <div>
            <p>
                <i>Recently Searched</i>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {recent.map((movie)=>(
                    <Card  key={movie.id} movie={movie}/>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recent;
