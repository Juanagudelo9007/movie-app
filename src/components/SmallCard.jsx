const SmallCard = ({ movie }) => {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/100x150?text=No+Image";

  return (
    <div className=" bg-transparent p-1">
      <div className="w-[40px]  sm:w-[60px] md:w-[80px] aspect-[2/3] rounded-md shadow-[0_0_12px_rgba(154,99,248,0.6)] overflow-hidden flex flex-shrink-0">
        <img
          src={posterUrl}
          className="w-full aspect-[2/3] object-cover"
          alt={movie.title || "No title"}
        />
      </div>
    </div>
  );
};
export default SmallCard;
