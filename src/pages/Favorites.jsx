import React from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { LikedMovies } from "../Context/FavoriteMovies";
import { PiEmptyBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

const Favorites = () => {
  const { favorites } = useContext(LikedMovies);
  
useEffect(() => {
  console.log("Favorites mounted");
}, []);
   
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center mt-8">
        {favorites.length === 0 ? (
          <p className="flex items-center gap-4 ">
            <i className="font-bold">You Don't have Favorites</i>{" "}
            <span className="text-2xl">
              <PiEmptyBold />
            </span>
          </p>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <p className="flex items-center gap-4">
              <i className="font-extrabold">Favorites Movies</i>
              <span className="text-xl">
                {" "}
                <FaStar />
              </span>
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
