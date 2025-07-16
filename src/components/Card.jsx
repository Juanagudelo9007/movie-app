import React from "react";

function Card({ movie }) {
  return (
    <div className="relative w-[250px]  bg-slate-900 text-white rounded-sm text-center overflow-hidden group">
      <button className="absolute top-1 right-2 z-20 cursor-pointer">like</button>
      <img
        className="w-full h-[200px] object-cover"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      {/*Overlay*/}
      <div className="p-2 absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col place-content-center transition-all duration-500 bg-black/70 backdrop-blur-sm cursor-pointer">
        <h3 className="text-xl font-bold truncate">{movie.title}</h3>
        <p className="text-xs text-slate-400 line-clamp-4 mt-4 text-justify">
          {movie.overview}
        </p>
      </div>
      <div className=" flex justify-between p-2 mt-2 text-slate-400 ">
        <span>{movie.original_language}</span>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
}

export default Card;
