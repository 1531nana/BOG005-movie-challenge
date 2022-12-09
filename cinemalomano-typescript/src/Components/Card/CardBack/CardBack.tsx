import { makeRequestGetMovieId } from "../../../lib/request";
import { Description } from "../../../types";
import { useState, useEffect } from "react";

interface CardB {
  movies: Array<Description>;
}

export const CardBack = ({ movies }: CardB) => {

    interface CardBac {
        movieDetail: Array<Description>;
      }
      
  const [movieDetails, setMovieDetail] = useState<CardBac["movieDetail"]>([]);

  useEffect(()=>{
      if (movies) {
        movies.map((movie) =>
          makeRequestGetMovieId(movie.imdbID).then((res) =>
           setMovieDetail(res)
          )
        );
      }
  }, [movies]
  )

  return (
    <>
      {movieDetails.map((res) => (
        <section className="card--movie_face --back " key={res.imdbID}>
          <p>{res.Title}</p>
          <p>{res.Plot}</p>
          <p>{res.Genre}</p>
        </section>
      ))}
    </>
  );
};
