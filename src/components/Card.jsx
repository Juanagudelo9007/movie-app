import React from "react";

function Card({ movie }) {
  return (
    <div className="relative w-[250px] h-[250] bg-red-500 flex flex-col rounded-sm text-center">
      <button className="absolute top-1 right-2">like</button>
      <img
        className="rounded-sm object-cover"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p className="text-[12px] text-justify p-4">{movie.overview}</p>
      <div className="flex justify-between p-2">
        <span>{movie.original_language}</span>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
}

export default Card;
