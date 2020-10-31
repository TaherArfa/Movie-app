import React from "react";
import MovieCard from "./MovieCard";

function MovieList({text, movies,rate }) {
    console.log("texttt",text)
  return (
    <div className="MovieList">
      {movies.filter((el) =>
          el.title.toUpperCase().includes(text.toUpperCase()) && el.rating>=rate
        ).map((el) => (
        <MovieCard key={el.id} movie={el} />
      ))}
    </div>
  );
}

export default MovieList;
