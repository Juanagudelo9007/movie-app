import { useState } from "react";
import axios from "axios";

export const useSearch = (setMovies) => {
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

  return {
    input,
    setInput,
    error,
    setError,
    fetchingMovies,
  };
};
