import React, { useState } from "react";
import axios from "axios";

const Search = ({ setMovies }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const key = "1d3172c68f14f66b46202879691d8367";

  const fetchingMovies = async () => {
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
      const result = res.data.results;
      const filteredMovies = input
        ? result.filter((m) =>
            m.title.toLowerCase().includes(input.toLowerCase)
          )
        : result;
      setMovies(filteredMovies);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

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
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-2">
          Please try again with a valid title
        </p>
      )}
    </div>
  );
};

export default Search;
