import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/search";

function Home() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Navbar />
      <Search setMovies={setMovies} />
    </div>
  );
}

export default Home;
