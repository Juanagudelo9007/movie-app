import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import axios from "axios";

const Search = ({ setMovies }) => {
  const { input, setInput, error, setError, fetchingMovies } =
    useSearch(setMovies);

  const key = "1d3172c68f14f66b46202879691d8367";

  {
    /* Default movies */
  }

  useEffect(() => {
    const defaultMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
        );
        setMovies(res.data.results);
      } catch (error) {
        setError(error);
        console.log("error while searching", error);
      }
    };
    defaultMovies();
  }, []);

 console.log(input);

  return (
    <div className="h-[60vh] w-full flex justify-center items-center px-4">
      <div className="flex justify-center gap-5 w-full max-w-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Movies..."
          className="flex-grow p-1 border-b-1 rounded-sm outline-0"
        />
        <button
          onClick={() => fetchingMovies(debounceInput)}
          className="px-4  bg-transparent text-white rounded text-sm cursor-pointer"
        >
          Search
        </button>
        {error && (
          <div className="fixed inset-0  bg-black/30 flex items-center justify-center px-4 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-black/50 p-6 rounded shadow-md text-center">
              <p className="text-red-700 mb-4 font-semibold">
                Please try again with a valid title
              </p>
              <button
                onClick={() => setError(false)}
                className="mt-2 px-2 py-1 bg-red-600 text-white rounded-sm text-[10px] cursor-pointer"
              >
                close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
