import { useState } from "react";
import axios from "axios";
import { useRecentSearches } from "./useRecentSearches";

export const useSearch = (setMovies) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const { addRecent } = useRecentSearches();

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

      if (filteredMovies.length > 0) {
        addRecent(filteredMovies[0]);
      }

      setMovies(filteredMovies);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return {
    input,
    setInput,
    error,
    setError,
    fetchingMovies,
  };
};
