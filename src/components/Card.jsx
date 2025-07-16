import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";

function Card({ movie }) {
  const [like, setLike] = useState(false)
  return (
    <div className="relative w-[250px] h-[310px] bg-slate-900 text-white rounded-sm text-center overflow-hidden group ">
      <button
        className="absolute top-1 right-2 z-20 cursor-pointer"
        onClick={() => setLike(!like)}
      >
        {like ? <FcLike /> : <GoHeart />}
      </button>
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      {/*Overlay*/}
      <div className="p-2 absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col place-content-center transition-all duration-500 bg-black/70 backdrop-blur-sm cursor-pointer">
        <h3 className="text-xl font-bold truncate">{movie.title}</h3>
        <p className="text-xs text-slate-400 line-clamp-4 mt-4 text-justify">
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
