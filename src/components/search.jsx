import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const key = "1d3172c68f14f66b46202879691d8367";

  const fetchingMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}`
      );
      const movies = res.data.results;
      const filteredMovies = input
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase())
          )
        : movies;
      setResult(filteredMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchingMovies();
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {result.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.release_date}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
