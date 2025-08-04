import { motion } from "framer-motion";

const SmallCard = ({ movie, index }) => {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/100x150?text=No+Image";

  return (
    <motion.div
      className=" bg-transparent p-1 mb-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.5, ease: "easeOut" }}
    >
      <div className="w-[50px]  sm:w-[60px] md:w-[80px] aspect-[2/3] rounded-md shadow-[0_0_12px_rgba(154,99,248,0.6)] overflow-hidden flex cursor-pointer">
        <img
          src={posterUrl}
          className="w-full aspect-[2/3] object-cover"
          alt={movie.title || "No title"}
        />
      </div>
    </motion.div>
  );
};
export default SmallCard;
