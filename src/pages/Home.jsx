import React, { useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import LastSearch from "../components/LastSearch";

function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="min-h-screen">
      <Search setMovies={setMovies} />
      <LastSearch />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie,index) => (
            <Card key={movie.id} movie={movie} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
