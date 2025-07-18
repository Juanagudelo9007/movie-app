import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/search";
import Card from "../components/Card";


function Home() {
  const [movies, setMovies] = useState([]);
 
  return (
    <div>
      <Navbar />
      <Search setMovies={setMovies} />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
