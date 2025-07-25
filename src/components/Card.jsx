import React, { useContext } from "react";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import {LikedMovies} from "../Context/FavoriteMovies";




function Card({ movie }) {
const { favorites, toggleFav,  } =
  useContext(LikedMovies);

  const fav = favorites.some(f => f.id === movie.id)

  return (
    <div className="relative w-[200px] aspect-[2/3] bg-slate-900 text-white rounded-sm text-center overflow-hidden group font-montserrat shadow-[0_0_12px_rgba(255,255,255,0.6)]">
      <button
        className="absolute top-1 right-2 z-20 cursor-pointer text-xl"
        onClick={() => toggleFav(movie)}
      >
        {fav ? <FcLike /> : <GoHeart />}
      </button>
      <img
        className=" w-full aspect-[2/3]"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      {/*Overlay*/}
      <div className="p-2 absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col place-content-center transition-all duration-500 bg-black/70 backdrop-blur-sm cursor-pointer">
        <h3 className="text-lg font-bold truncate">{movie.title}</h3>
        <p className="text-xs text-slate-300 line-clamp-4 mt-4 text-justify">
          {movie.overview}
        </p>

        {/* I need to fix this, this is my limit now */}
        <div className="absolute bottom-0 left-0 flex p-2 text-slate-400 uppercase ">
          <span>{movie.original_language}</span>
        </div>
        <div className="absolute bottom-0 right-0 flex p-2 text-slate-400  ">
          <span>{movie.release_date}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
