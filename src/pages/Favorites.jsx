import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { LikedMovies } from "../Context/FavoriteMovies";

const Favorites = () => {
  const { favorites } = useContext(LikedMovies);

  return (
    <div className=" p-6">
      <h1 className="text-center mt-10">Your Favorite Movies</h1>
      <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6  mt-16">
        {favorites.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
