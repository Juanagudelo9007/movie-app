import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { LikedMovies } from "../Context/FavoriteMovies";

const Favorites = () => {
  const { favorites } = useContext(LikedMovies);

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-center m-8">Your Favorite Movies</h1>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
