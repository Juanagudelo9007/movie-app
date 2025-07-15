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
       {movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
       ))}
    </div>
  );
}

export default Home;
