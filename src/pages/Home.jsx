import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/search";
import Card from "../components/Card";

function Home({ user }) {
  const [movies, setMovies] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState(true);

  useEffect(() => {
    const showMesssage = setTimeout(() => {
      setWelcomeMessage(false);
    }, 7000);
    return () => clearTimeout(showMesssage);
  }, []);

  console.log(user.displayName);
  return (
    <div className="min-h-screen bg-no-repeat  bg-fixed bg-cover bg-center bg-[url('hero-bg.png')]">
      <Navbar />
      {user?.displayName && welcomeMessage && (
        <div className="inset-0 flex justify-center items-baseline-last bg-transparent">
          <div className=" w-[250px] h-[100px] bg-transparent flex justify-center items-center rounded-md">
            <p className="text-white text-md sm:text-2xl font-bold">
              Welcome {user?.displayName}
            </p>
          </div>
        </div>
      )}
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
