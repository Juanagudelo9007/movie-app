import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ setMovies }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const key = "1d3172c68f14f66b46202879691d8367";

  const fetchingMovies = async () => {
    {
      /*Error if type numbers or empty */
    }

    if (!input.trim() || !isNaN(Number(input))) {
      setMovies([]);
      setError(true);
      return;
    }

    try {
      setError(false);
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${key}`
      );

      {
        /* Error if type asasweu or &%$# */
      }

      if (res.data.results.length === 0) {
        setMovies([]);
        setError(true);
        return;
      }

      const result = res.data.results;
      const filteredMovies = input
        ? result.filter((m) =>
            m.title.toLowerCase().includes(input.toLowerCase())
          )
        : result;
      setMovies(filteredMovies);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

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

  return (
    <div className="h-[60vh] w-full flex justify-center items-center px-4">
      <div className="flex justify-center gap-5 w-full max-w-md">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Movies..."
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={fetchingMovies}
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
        {error && (
          <div className="fixed inset-0  bg-black/70 flex items-center justify-center px-4 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-black p-6 rounded shadow-md text-center">
              <p className="text-red-700 mb-4 font-semibold">
                Please try again with a valid title
              </p>
              <button
                onClick={() => setError(false)}
                className="mt-2 px-2 py-1 bg-red-600 text-white rounded-sm text-[10px]"
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
