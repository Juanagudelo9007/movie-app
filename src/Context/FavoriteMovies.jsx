import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useAuthForm } from "../hooks/useAuthForm";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const LikedMovies = createContext();

const FavoriteMovies = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { userId } = useAuthForm();

  useEffect(() => {
    if (!userId) return;

    const fetchMovies = async () => {
      const docRef = doc(db, "favorites", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFavorites(docSnap.data().movies || []);
      } else {
        setFavorites([]);
      }
      setIsLoaded(true);
    };
    fetchMovies();
  }, [userId]);

  console.log("user id ", userId);

  useEffect(() => {
    if (!userId) return;
    if (!isLoaded) return;

    console.log("saving favorites", favorites);
    const saveMovies = async () => {
      try {
        await setDoc(doc(db, "favorites", userId), {
          movies: favorites,
        });
      } catch (error) {
        console.log("Error saving favorites", error);
      }
    };
    saveMovies();
  }, [favorites, userId, isLoaded]);

  const addFavorites = (movie) => {
    if (!favorites.find((item) => item.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

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
