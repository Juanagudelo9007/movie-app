import React from "react";
import { createContext, useState } from "react";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";

export const LikedMovies = createContext();

const FavoriteMovies = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (movie) => {
    if (!favorites.find((item) => item.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  {
    /* Toggle function to add and remove movies */
  }

  const toggleFav = (movie) => {
    setFavorites((prev) => {
      const isFav = prev.some((f) => f.id === movie.id);
      if (isFav) {
        return prev.filter((f) => f.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  console.log("the movie is", addFavorites);
  return (
    <LikedMovies.Provider
      value={{
        favorites,
        setFavorites,
        addFavorites,
        removeFavorites,
        toggleFav,
      }}
    >
      {children}
    </LikedMovies.Provider>
  );
};

export default FavoriteMovies;
