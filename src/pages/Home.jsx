import React, { useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

function Home() {
  const [movies, setMovies] = useState([]);



  return (
    <div className="min-h-screen bg-no-repeat  bg-fixed bg-cover bg-center bg-[url('hero-bg.png')]">
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
