import React from 'react'

const SmallCard = ({movie}) => {

    const posterUrl = movie.poster_path 
    ?  `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/100x150?text=No+Image";
      
  return (
    <div className='flex flex-col w-[80px] cursor-pointer '>
         <img src={posterUrl}
         className='w-full aspect-[2/3] object-cover rounded-md'
         alt={movie.title} />
         <p className='text-xs text-center mt-1 truncate w-full'>{movie.title}</p>
    </div>
  )
}

export default SmallCard